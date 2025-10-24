document.addEventListener('DOMContentLoaded', function() {
  let elements = document.querySelectorAll('.list-menu__item');

  elements.forEach((el) => {
    if (el.querySelector('span')) {
      if (el.querySelector('span').innerText.toLowerCase() == 'offers') {
        el.querySelector('span').classList.add('fw-bold')
      } else if (el.getAttribute("href") ) {
        if (el.getAttribute("href").indexOf('collections/offers') > 0) {
          el.querySelector('span').classList.add('fw-bold')
        }
      }
    } else {
      if (el.getAttribute('href')) {
        if (el.getAttribute("href").indexOf('collections/offers') > 0 || el.innerText.toLowerCase() == 'offers') {
            el.classList.add('fw-bold')  
        }
      }
    }
  })

  document.querySelectorAll('slider-component .media > *:not(.zoom):not(.deferred-media__poster-button)').forEach((e) => {
    e.style.maxHeight = document.querySelector('.product__info-container').offsetHeight + 'px';
  })

  document.querySelectorAll('media-gallery.product__media-gallery .media.global-media-settings').forEach((e) => {
    e.style.paddingTop = '100%'
  })

}, false);