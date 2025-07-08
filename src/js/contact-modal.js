// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('closeModalBtn');
  const openModalBtns = document.querySelectorAll('.open-modal');
  const form = document.querySelector('.contact-modal-form');

  if (!form || !modal || !closeBtn) return;

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => input.classList.remove('input-error'));

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    let isValid = true;

    if (!name.value.trim()) {
      markError(name, 'Name is required');
      isValid = false;
    } else if (!isValidName(name.value)) {
      markError(name, 'Please enter a valid name');
      isValid = false;
    }

    if (!email.value.trim()) {
      markError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      markError(email, 'Enter a valid email');
      isValid = false;
    }

    if (message.value.length > 500) {
      markError(message, 'Message is too long (max 500 characters)');
      isValid = false;
    }

    if (isValid) {
      iziToast.success({
        title: 'Success',
        message: 'Form submitted successfully!',
        position: 'topRight',
        timeout: 3000,
      });
      form.reset();
      closeModal();
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidName(name) {
    const cleaned = name.trim();

    const allowedChars = /^[A-Za-zА-Яа-яЁё\s\-]+$/;
    const hasVowel = /[aeiouаеёиоуыэюя]/i;

    return (
      cleaned.length >= 2 &&
      allowedChars.test(cleaned) &&
      hasVowel.test(cleaned)
    );
  }

  function markError(field, message) {
    field.classList.add('input-error');
    field.placeholder = message;

    iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight',
      timeout: 3000,
    });
  }
});
