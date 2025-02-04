const mycategory = new URLSearchParams(window.location.search).get("category");

const productlist = document.querySelector(".product_list");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
        <article class="product">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="sports trøje" />
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">${product.articletype} | ${product.brandname}</p>
          <p class="price">
            <span>Prev.</span>
            DKK ${product.price},-
          </p>
          <div class="discount"></div>
          <a href="produkt.html">Read More</a>
        </article>`
    )
    .join("");

  productlist.innerHTML = markup;
}
