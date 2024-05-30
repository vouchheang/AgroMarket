async function fetchProductsByCategory(categoryId) {
  const url = `https://colorful-ball-607353d204.strapiapp.com/api/products?filters[categoryID][CategoryID][$eq]=${categoryId}&pagination[pageSize]=6&populate=*`;
  try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      let cards = "";
      let categoryText = "";
      let button = "";

      const products = data.data;
      for (let i = 0; i < products.length; i++) {
          const product = products[i];
          // categoryText = product.attributes.category.data.attributes.name;
          const imageUrl = product.attributes.images.data[0]?.attributes.url;

          cards += ` 
<div class="card">
  ${product.attributes.Origanic ? '<span class="organic-badge">Organic</span>' : ''}
  <img src="${imageUrl}" class="card-img-top" alt="Image">
  <div class="card-body">
      <h5 class="card-title">${product.attributes.Name}</h5>
      <p class="card-text">Price: ${product.attributes.Price} $</p>
      <p class="card-text">Quantity: ${product.attributes.Quantity} Kg</p>
      <h6 class="card-text">Province: ${product.attributes.OriginProvince}</h6>
  </div>
</div>
          `;
      }


      return `
          <div class="col-12">
              <h2 class="mt-4">${categoryText}</h2>
          </div>
          <div id="product-list">
              ${cards}
          </div>
          ${button}
      `;
  } catch (error) {
      console.error("Error fetching products:", error);
      return `<p>Error loading products for category ${categoryId}</p>`;
  }
}

async function loadProducts() {
  const categories = [1]; // Add the correct category IDs
  const promises = categories.map(fetchProductsByCategory);
  const results = await Promise.all(promises);
  const element = document.getElementById("display");
  element.innerHTML = results.join("");
}

loadProducts();
