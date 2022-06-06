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
  if(event.target.className == "gallery__item" || event.target.className == "gallery__image" || event.target.className == "gallery__link"){
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" alt="${event.target.alt}">
    </div>
`, {
    onShow: () => window.addEventListener('keydown', closeModalOnEscape),
    onClose: () => window.removeEventListener('keydown', closeModalOnEscape)
  })
  instance.show(() => {
    const modal = document.querySelector('.basicLightbox--visible')
    modal.addEventListener('click', closeModalOnClick)
  })
  
  function closeModalOnEscape(event) {
    if (event.code == "Escape") {
      instance.close()
    }
  }
  function closeModalOnClick(event) {
    if (event.target.className == "basicLightbox--visible") {
      instance.close()
    }
  }
    }
}