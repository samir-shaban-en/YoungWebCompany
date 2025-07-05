const form = document.querySelector('.footer-form');
const input = document.querySelector('.footer-input');
const block = document.querySelector('#errorMessage');

let formData = {
    email: ""
}; 

form.addEventListener('input', handleInputEvent);

function handleInputEvent(event) {
    if (event.target.nodeName === 'INPUT') {
        formData.email = event.target.value
    }
    localStorage.setItem("email-state", JSON.stringify(formData))
}

if (!(localStorage.getItem("email-state") === null)) {
    let usedFormDate = JSON.parse(localStorage.getItem("email-state"));
    formData.email = usedFormDate.email;
    document.querySelector('[name="footer-input"]').value = usedFormDate.email;
} else {
    formData.email = "";
}

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    if (formData.email === "" || !input.checkValidity()) {
        input.classList.add('invalid');
        block.style.display = 'block';
    } else {
        formData.email = "";
        document.querySelector('[name="footer-input"]').value = "";
        localStorage.removeItem("email-state");
        input.classList.remove('invalid');
        block.style.display = 'none';
    }
}