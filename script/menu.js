const menu = document.getElementById('menu');
const containerBtn = document.getElementById('containerBtn');

// Mudando Menu

let controlScroll = 0;

const changeMenu = (flag) => {
  controlScroll++;
  console.log(controlScroll)
  menu.classList.toggle('menu-active');
  containerBtn.classList.toggle('containerBtn-active');
  controlMode = false;
  
  if(controlScroll === 1) {
    document.documentElement.style.overflowY = 'hidden'
    btnAgents.style.display = 'none';
  } else if(controlScroll === 2) {
    document.documentElement.style.overflowY = 'auto';
    setTimeout(() => {
      btnAgents.style.display = 'flex';
    }, 100)
    controlScroll = 0;
    controlMode = true;
  } 
} 

// Redimensionamento da página

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if(width > 768 || controlScroll === 0) {
    containerBtn.classList.remove('containerBtn-active')
  } else if (controlScroll === 1) {
    containerBtn.classList.add('containerBtn-active')
  }
})

console.log(document.documentElement.clientWidth)
