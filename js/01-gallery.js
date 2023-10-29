import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulElement = document.querySelector(".gallery");
ulElement.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
// Додаємо обробник кліку на всю галерею
ulElement.addEventListener("click", handleClick);
// Функція для відкриття модального вікна
function openLightbox(imageSource) {
  const instance = basicLightbox.create(
    `
        <img src="${imageSource}" width="800" height="600">
    `,
    {
      onShow: (instance) => {},
      onClose: (instance) => {},
    }
  );

  instance.show();

  // Додаємо обробник клавіші "Escape" для закриття модального вікна
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

// Обробник кліку на зображення
function handleClick(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const imageSource = event.target.dataset.source;
    openLightbox(imageSource);
  }
}

// Функція для створення розмітки
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

