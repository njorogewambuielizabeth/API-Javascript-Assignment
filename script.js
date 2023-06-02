var hamburgerMenu = document.querySelector('.hamburger-menu');
var menuList = document.querySelector('.menu-list');

hamburgerMenu.addEventListener('click', function () {
  menuList.classList.toggle('active');
});



function generateProductCards(data) {
  const productContainer = document.getElementById("allContent");
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" id='prodimage'/>
            <h2>${product.title}</h2>
            <div class='productPrice'>
            <p>$${product.price}</p>
            </div>
            <div class='but'>    <button>ADD TO CART</button> </div>
         
        `;
    productContainer.appendChild(card);
  });
}
function fetchProducts() {
  fetch("https://dummyjson.com/products?limit100")
    .then((response) => response.json())
    .then((data) => {
      const returnedData = data.products.slice(0, 8);
      generateProductCards(returnedData);
    });
}
fetchProducts()