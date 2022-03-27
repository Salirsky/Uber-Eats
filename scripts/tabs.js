const tabButtons = document.querySelectorAll(".menu-item_btn");
const tabDescriptions = document.querySelectorAll(".menu-content");
// const tabImages = document.querySelectorAll(".design-images");
const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    // changeContent(tabImages, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add("menu-item_btn_active");
      } else {
        btn.classList.remove("menu-item_btn_active");
      }
    });
  });
});

