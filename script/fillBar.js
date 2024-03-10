const btnAgents = document.getElementById('btnAgents');

btnAgents.addEventListener('mouseout', () => {
  btnAgents.classList.add('release-bar');
})

btnAgents.addEventListener('mouseover', () => {
  btnAgents.classList.remove('release-bar');
})