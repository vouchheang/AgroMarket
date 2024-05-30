const url = 'https://colorful-ball-607353d204.strapiapp.com/api/products?populate=*';

async function fetchAllProducts(url) {
  let allProducts = [];
  let nextPageUrl = url;

  while (nextPageUrl) {
    const response = await fetch(nextPageUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    allProducts = allProducts.concat(data.data);

    // Check for pagination information (assuming Strapi includes it)
    const pagination = data.meta.pagination;
    if (pagination.page < pagination.pageCount) {
      nextPageUrl = `${url}&pagination[page]=${pagination.page + 1}`;
    } else {
      nextPageUrl = null;
    }
  }
  
  return allProducts;
}

fetchAllProducts(url)
  .then((products) => {
    const card = document.getElementById("product-list");
    
    // Group products by category
    const groupedProducts = {};
    products.forEach(product => {
      const category = product.attributes.Category;
      if (!groupedProducts[category]) {
        groupedProducts[category] = [];
      }
      groupedProducts[category].push(product);
    });
    
    // Display up to 24 products from each category
    Object.keys(groupedProducts).forEach(category => {
      const products = groupedProducts[category].slice(0, 33);
      products.forEach(product => {
        card.innerHTML += `
       
       
      <div class="col-md-4">
        <div class="card position-relative">
          <img src="${product.attributes.images.data[0]?.attributes.formats.thumbnail.url}" class="card-img-top" alt="Apple">
          <div class="card-body">
            <h5 class="card-title">${product.attributes.Name}</h5>
            <p class="card-text">Quantity: 10 kg</p>
            <p class="card-text">Price: ${product.attributes.Price}</p>
            <p class="card-text">Province: Kompot</p>
          </div>
        </div>
    

          `;
      });
    });
        

    console.log(products);
  })
  .catch((error) => console.error("Error:", error));

  

  
  