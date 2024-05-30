// fetch('https://colorful-ball-607353d204.strapiapp.com/api/products?populate=*')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data); 

//         const products = data.data; 
//         displayProducts(products); 
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//    function displayProducts(products) {
//       const productContainer = document.getElementById('product-container');
//       productContainer.innerHTML = ''; 


//       for (let i = 0; i < 40; i++) {
//         const product = products[i];

       
//         const card = document.createElement('div');
//         card.className = 'col-md-4';

 
//         const imageUrl = product.attributes.images?.data?.[0]?.attributes?.url || 'placeholder.jpg'; // Fallback to 'placeholder.jpg' if image URL is not available
//         const name = product.attributes.Name;
//         const quantity = product.attributes.Quantity;
//         const price = product.attributes.Price;
//         const province = product.attributes.OriginProvince;
//         const isOrganic = product.attributes.Origanic;

//         card.innerHTML = `
//           <div class="card position-relative">
//             <img src="${imageUrl}" class="card-img-top" alt="${name}">
//             ${isOrganic ? '<span class="badge organic-badge">Organic</span>' : ''}
//             <div class="card-body">
//               <h5 class="card-title">${name}</h5>
//               <p class="card-text">Quantity: ${quantity} kg</p>
//               <p class="card-text">Price: $${price} per kg</p>
//               <p class="card-text">Province: ${province}</p>
//             </div>
//           </div>
//         `;

//         productContainer.appendChild(card);
//       }
//     }






    // fetch('https://colorful-ball-607353d204.strapiapp.com/api/products?populate=*')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data); // Log the entire response to inspect its structure

    //             const products = data.data; // Assuming the products are in data.data
    //             displayProducts(products); // Call the function to display products
    //         })
    //         .catch(error => {
    //             console.error('There was a problem with the fetch operation:', error);
    //         });

    //     function displayProducts(products) {
    //         const productContainer = document.getElementById('product-container');
    //         productContainer.innerHTML = '';

    //         products.forEach(product => {
    //             const card = document.createElement('div');
    //             card.className = 'col-md-4';

    //             const imageUrl = product.attributes.images?.data?.[0]?.attributes?.url || 'placeholder.jpg'; // Fallback to 'placeholder.jpg' if image URL is not available
    //             const name = product.attributes.Name;
    //             const quantity = product.attributes.Quantity;
    //             const price = product.attributes.Price;
    //             const province = product.attributes.OriginProvince;
    //             const isOrganic = product.attributes.Origanic;

    //             card.innerHTML = `
    //                 <div class="card position-relative">
    //                     <img src="${imageUrl}" class="card-img-top" alt="${name}">
    //                     ${isOrganic ? '<span class="badge organic-badge">Organic</span>' : ''}
    //                     <div class="card-body">
    //                         <h5 class="card-title">${name}</h5>
    //                         <p class="card-text">Quantity: ${quantity} kg</p>
    //                         <p class="card-text">Price: $${price} per kg</p>
    //                         <p class="card-text">Province: ${province}</p>
    //                     </div>
    //                 </div>
    //             `;

    //             productContainer.appendChild(card);
    //         });
    //     }


