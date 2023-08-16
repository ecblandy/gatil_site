document.addEventListener('DOMContentLoaded', () => {
  const mobile = document.querySelector('.menu--mobile')
  document.querySelector('.burger').addEventListener('click', () => {
    
    mobile.classList.add('active')
  })
  document.querySelector('.burgerclose').addEventListener('click', () => {
    mobile.classList.remove('active')
  })
})