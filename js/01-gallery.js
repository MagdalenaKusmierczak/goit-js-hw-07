import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
gallery.addEventListener("click", selectImage); //Creating modal after click on gallery-element.

function selectImage(event) {
  event.preventDefault();
  const selectedImage = event.target.dataset.source;
  const imgAlt = event.target.alt;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox // Usage of ready modal with img from basicLightbox library
    .create(
      `<img width="1400" height="900" src="${selectedImage}" alt="${imgAlt}">`, //Changing value of img src in modal before opening.
      //Additional  - closing modal with ESC key. Lintener active only when modal is open.
      {
        onShow: () => {
          document.addEventListener("keydown", onEsc);
        },
        onClose: () => {
          document.removeEventListener("keydown", onEsc);
        },
      }
    );
  const onEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  instance.show();
}
