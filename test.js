fetch('https://colorful-ball-607353d204.strapiapp.com/api/products?populate=*')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {   
    const card = document.getElementById('Product-list');
    const products =  data.data;
    for (let i = 0; i < products.length; i++) {
      const product = products[i].attributes;
      card.innerHTML += `
        <div class="each-card">
          <p>${product.Price}</p>
          <p>${product.Name}</p>
          <p>${product.Quantity}</p>
         
        </div>`;
    }
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
