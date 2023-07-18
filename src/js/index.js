const btnToogle = document.getElementById('switch')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')

const btnOpenMenu = document.querySelector('.open-menu')
const btnCloseMenu = document.querySelector('.close-menu')

//Dark mode
btnToogle.addEventListener('click', function () {
  this.classList.toggle('fa-sun')
  if (this.classList.toggle('fa-moon')) {
    document.querySelector('.open-menu i').style.color = '#192229'
    header.style.background = '#FBFBFE'
    body.style.background = '#FBFBFE'
    body.style.color = 'black'
    body.style.transition = '2s'
  } else {
    document.querySelector('.open-menu i').style.color = '#EFF3F5'
    header.style.background = '#192229'
    body.style.background = '#192229'
    body.style.color = '#EFF3F5'
    body.style.transition = '2s'
  }
})

//Open|Close menu
function toggleMenu() {
  menu.classList.toggle('menu-opened')
}

btnOpenMenu.addEventListener('click', toggleMenu)
btnCloseMenu.addEventListener('click', toggleMenu)

//Connect menu links whit page section

const menuLinks = document.querySelectorAll('.menu a[href^="#"]')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
      if (entry.isIntersecting) {
        menuLink.style.fontWeight = '700'
      } else {
        menuLink.style.fontWeight = '300'
      }
    })
  },
  { rootMargin: '-40% 0px -30px -60%' }
)

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', function () {
    menu.classList.remove('menu-opened')
  })
  const hash = menuLink.getAttribute('href')
  const target = document.querySelector(hash)
  if (target) {
    observer.observe(target)
  }
})

//Validation inputs form
const inputs = document.querySelectorAll('.input-form')

inputs.forEach((inputIn) =>
  inputIn.addEventListener('blur', (inputIn) => {
    validate(inputIn.target)
  })
)
console.log(inputs)
function validate(input) {
  const typeInput = input.dataset.type
  console.log(input.validity.valid)
  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid')
    input.parentElement.querySelector('.input-message-alert').innerHTML =
      showMessageError(typeInput, input)
  } else {
    input.parentElement.classList.add('input-container--invalid')
    input.parentElement.querySelector('.input-message-alert').innerHTML =
      showMessageError(typeInput, input)
  }
}
const typeError = ['valueMissing']
const messageAlert = {
  name: {
    valueMissing: 'El campo nombre es necesario',
  },
  email: {
    valueMissing: 'El campo correo es necesario',
  },
  subject: {
    valueMissing: 'El campo asunto es necesario',
  },
  message: {
    valueMissing: 'El campo mensaje es necesario',
  },
}
function showMessageError(typeInput, input) {
  let message = ''
  typeError.forEach((error) => {
    if (input.validity[error]) {
      message = messageAlert[typeInput][error]
    }
  })
  return message
}
