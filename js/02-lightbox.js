import { galleryItems } from './gallery-items.js';
// Change code below this line
const test = document.querySelector('.gallery')

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
test.insertAdjacentHTML('afterbegin', gallaryBlocks)

let gallery = new SimpleLightbox('.gallery a');