const loader = document.getElementById("loader")

if (loader) {
let progress = 0
let interval = setInterval(() => {
  progress += 1
  loader.innerText = progress + '%'
  loader.style.height = (100-progress) + '%'
  if (progress >= 100) {
    clearInterval(interval)
    loader.style.display = 'none'
  }
}, 15)
//loader.classList.add('slide-down');
}

//animate(
//  '.loader',
//  {
//    y: '0%',
//  },
//  { duration: 10, delay: 1 },
//)
