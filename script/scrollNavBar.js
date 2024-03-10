const nav = document.getElementById('nav');

let controlMode = true;

window.addEventListener('scroll', function scrolling() {
  if(controlMode) {
    const positionScroll = window.scrollY;
    console.log(positionScroll)
    if(positionScroll >= 1) {
      nav.classList.add('nav-active');
    } else {
      nav.classList.remove('nav-active');
    }
  }
})