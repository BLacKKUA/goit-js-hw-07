import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery')

galleryRef.addEventListener('click', lockLinkWorks)
galleryRef.addEventListener('click', openModalPicture)


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

function lockLinkWorks(event) {
  event.preventDefault();
}

function openModalPicture(event) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" alt="${event.target.alt}">
    </div>
`)
  instance.show(() => {
    window.addEventListener('keydown', closeModalOnEscape)
    const modal = document.querySelector('.basicLightbox--visible')
    modal.addEventListener('click', closeModalOnClick)
  })
  
  function closeModalOnEscape(event) {
    if (event.code == "Escape") {
      instance.close(() => window.removeEventListener('keydown', closeModalOnEscape))
    }
  }
  function closeModalOnClick(event) {
    if (event.target.className == "basicLightbox--visible") {
      instance.close(() => window.removeEventListener('keydown', closeModalOnEscape))
    }
  }
}