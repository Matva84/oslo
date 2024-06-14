gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const sections = gsap.utils.toArray('section');

//const loader = document.querySelector('.loader--text');
//const updateProgress = (instance) =>
//  loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  //console.log('showDemo')
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  //gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

  sections.forEach((section, index) => {
    //console.log(section);
    const w = section.querySelector('.wrapper');
    //console.log(w)
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
      }
    });
  });
}
showDemo();
//imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
