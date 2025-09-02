//Popup
const fidbackBtn = document.querySelectorAll("button.fidback_form");
const fidbackForm = document.querySelectorAll("div.fidback_form");
const fidbackBtn2 = document.querySelectorAll("button.fidback_succes");

const inputs = document.querySelectorAll('form.popup__form input');
const button = document.querySelector('form.popup__form button');

const handleChange = () => {
 for (const input of inputs) {
   if (input.value === "") {
     button.setAttribute('disabled', '');
     return;
    }
  }
  button.removeAttribute('disabled');
}

for (const input of inputs) {
 input.onkeydown = input.onkeyup = input.onkeypress = input.change = handleChange;
}

fidbackBtn.forEach(button => {
    button.addEventListener('click', () => {
        BodyBackground();
        
        button.nextElementSibling.classList.toggle('hidden');
        button.nextElementSibling.style.backgroundColor = 'white';
    })
})

fidbackBtn2.forEach(button => {
    button.addEventListener('click', () => {
        BodyBackground();
        document.getElementById('fidback_form').classList.add('hidden');
        document.getElementById('fidback_succes').classList.toggle('hidden');
        button.nextElementSibling.style.backgroundColor = 'white';
    })
})

function fidback() {}

function BodyBackground() {
    document.body.classList.add('bodyOverlay');
    fidbackBtn.forEach(button => {
        button.addEventListener('click', () => {
            fidbackBtn.style.opacity = '1.0';
        })
    })
}