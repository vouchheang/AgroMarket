
const apiUrl = 'https://colorful-ball-607353d204.strapiapp.com/api/products?populate=*&filters[categroy][categoryId][$eq]=${CategoryID}&pagination[page]=1&pagination[pageSize]=6';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
   
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
 