const productContainer = document.querySelector(".product_view_main");
const productId = 1165;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <section class="product_view_container">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="sports trøje" />
      </section>
      <section class="purchase_box">
        <h3>${data.productdisplayname}</h3>
        <p>${data.articletype} | ${data.brandname}</p>
        <form action="index.html">
          <label>
            Select size
            <select name="size">
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </label>
          <button>Add to basket</button>
        </form>
      </section>
      `;
  });
