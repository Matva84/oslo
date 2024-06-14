document.addEventListener('DOMContentLoaded', () => {
  const animatedTextLeft = document.querySelector('.animated-textLeft');
  if (animatedTextLeft) {
    animatedTextLeft.classList.remove('hidden');
    animatedTextLeft.classList.add('slide-inLeft');
  }
  const animatedTextRight = document.querySelector('.animated-textRight');
  if (animatedTextRight) {
    animatedTextRight.classList.remove('hidden');
    animatedTextRight.classList.add('slide-inRight');
  }
});
