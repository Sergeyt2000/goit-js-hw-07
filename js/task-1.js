const menuListEl = document.querySelector('#categories');
const menuItemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", menuItemsEl.length);

menuItemsEl.forEach((item) => {
  const itemNameEl = item.querySelector("h2");
    console.log("Category:", itemNameEl.textContent);
    
  const subItemNamesEl = item.querySelectorAll("ul > li");
  console.log("Elements:", subItemNamesEl.length);
});


