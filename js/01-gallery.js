import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

//Creating and rendering tags for gallery items
const galleryItem = galleryItems
  .map(
    (item) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
            />
        </a>
    </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItem);

//Setting target on div.gallery and getting url of larger img
gallery.addEventListener("click", selectImage);

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImage = event.target.dataset.image;
  output = selectedImage;
}
