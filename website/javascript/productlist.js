const mycategory = new URLSearchParams(window.location.search).get("category");

const productlist = document.querySelector(".product_list");

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showProducts(allData);
  });

function showFiltered() {
  const filter = this.dataset.gender;
  if (filter == "All") {
    showProducts(allData);
  } else {
    fraction = allData.filter((product) => product.gender === filter);
    showProducts(fraction);
  }
}

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
        <article class="product ${product.discount && "onSale"} ${product.discount && "soldOut"}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="sports trøje" />
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">${product.articletype} | ${product.brandname}</p>
          <div class="price_container">
          <p class="price">
            DKK ${product.price},-
          </p>
          <p class="discount">Jeg er på udsalg! <span>&#8208;${product.discount}&#37;</span></p>
          <a href="produkt.html?productid=${product.id}">Read More</a>
          </div>
        </article>`
    )
    .join("");

  productlist.innerHTML = markup;
}
