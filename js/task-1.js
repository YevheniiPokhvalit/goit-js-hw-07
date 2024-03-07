const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements count: ${categoryElementsCount}`);
});
