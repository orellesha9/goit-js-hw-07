import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulElement = document.querySelector(".gallery");
ulElement.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
ulElement.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
    const instance = new SimpleLightbox(galleryItems);
    instance.open();

//   document.addEventListener("keydown", (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   });
}
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
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
