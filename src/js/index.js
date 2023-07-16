const btnToogle = document.getElementById('switch')
const body = document.querySelector('body')

const inputs = document.querySelectorAll('input')

btnToogle.addEventListener('click', function () {
  this.classList.toggle('fa-sun')
  if (this.classList.toggle('fa-moon')) {
    body.style.background = 'white'
    body.style.color = 'black'
    body.style.transition = '2s'
  } else {
    body.style.background = 'black'
    body.style.color = 'white'
    body.style.transition = '2s'
  }
})
