const categoryList = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories/")
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  console.log(data);

  const markup = data
    .map(
      (element) => `
            <a href="produktliste.html?category=${element.category}">${element.category}</a>
    `
    )
    .join("");

  categoryList.innerHTML = markup;
}
