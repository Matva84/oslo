let initialPositionTop = 0;
let initialPositionBottom = 0;

const element = document.querySelector('.hidden-tag')
if (element) {
  const position = element.getBoundingClientRect()
  initialPositionTop = position.top;
  initialPositionBottom = position.bottom;
}

document.addEventListener('scroll', function() {
  const scrollTop = window.scrollY
  const scrollBottom = window.scrollY + window.innerHeight
  //console.log(scrollTop, initialPositionTop, scrollBottom, initialPositionBottom)
  const element = document.querySelector('.hidden-tag')

  if (element) {
    if (scrollBottom > initialPositionTop && scrollTop < initialPositionBottom) {
      //element.classList.add('slide-inLeft')
      //element.classList.remove('hidden-tag')
      //console.log('Hidden tag removed')
    }
  } else {
    if (scrollTop > initialPositionBottom || scrollBottom < initialPositionTop) {
      const element = document.querySelector('.slide-inLeft')
      //element.classList.remove('slide-inLeft')
      //element.classList.add('hidden-tag')
      //console.log('Hidden tag added')
    }
  }
})
