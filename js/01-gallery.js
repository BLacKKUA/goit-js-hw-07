import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery')

galleryRef.addEventListener('click', lockLink)
galleryRef.addEventListener('click', getRefImage)

const gallaryBlocks = galleryItems.map(({preview, original, description} = {}) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("")
galleryRef.insertAdjacentHTML('afterbegin', gallaryBlocks)

function lockLink(event) {
  event.preventDefault();
}

function getRefImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  openModalWindow(event);
}

function openModalWindow(event) {
  const lightBoxModal = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="Hokkaido Flower">`)
  lightBoxModal.show()
  window.addEventListener('keydown', closeOnKeyEscape)
  function closeOnKeyEscape(event) {
      if(event.code === "Escape"){
        lightBoxModal.close()
      }
      window.removeEventListener('keydown', closeOnKeyEscape)
    }
}