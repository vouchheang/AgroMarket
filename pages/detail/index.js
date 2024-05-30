


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
    const productContainer = document.getElementById("product-container");

    // Group products by category
    const groupedProducts = {};
    products.forEach(product => {
      const category = product.attributes.Category || 'Uncategorized';
      if (!groupedProducts[category]) {
        groupedProducts[category] = [];
      }
      groupedProducts[category].push(product);
    });

    // Display up to 33 products from each category
    Object.keys(groupedProducts).forEach(category => {
      const categoryProducts = groupedProducts[category].slice(0, 33);
      categoryProducts.forEach(product => {
        const imageUrl = product.attributes.images?.data?.[0]?.attributes?.formats?.thumbnail?.url || 'placeholder.jpg';
        const name = product.attributes.Name;
        const quantity = product.attributes.Quantity;
        const price = product.attributes.Price;
        const province = product.attributes.OriginProvince;
        const isOrganic = product.attributes.Organic;

        const card = document.createElement('div');
        card.className = 'col-md-4';

        card.innerHTML = `
          <div class="card position-relative">
            <img src="${imageUrl}" class="card-img-top" alt="${name}">
            ${product.attributes.Origanic ? '<span class="badge organic-badge">Organic</span>' : ''}
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Price: $${price}</p>
              <p class="card-text">Price: ${quantity}</p>
              <p class="card-text">Province: ${province}</p>
            </div>
          </div>
        `;

        productContainer.appendChild(card);
      });
    });

    console.log(products);
  })
  .catch((error) => console.error("Error:", error));



