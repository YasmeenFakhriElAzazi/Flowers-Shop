fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-container');

    data.products.forEach(product => {
      const saleDiv = product.onSale ? '<div class="sale"><span class="sale-text">Sale!</span></div>' : '';

      const productCard = `
        <div class="card card7">
          <div class="product-image">
            ${saleDiv}

            <img src="${product.image}" class="product">
          </div>
          <div class="product-content">
            <div class="product-name">
              <h3 class="flowerName">${product.name}</h3>
            </div>
            <div class="product-rating">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <div class="product-price">
              <p class="price">$${product.price.toFixed(2)} <del>$${product.oldPrice.toFixed(2)}</del></p>
              <div class="add"><a href="${product.addToCartLink}">ADD TO CART</a></div>
            </div>  
          </div>
        </div>
      `;
      productContainer.innerHTML += productCard;
    });
  });
