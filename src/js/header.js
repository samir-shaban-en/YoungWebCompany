const burger = document.getElementById('burger-btn');
const navModal = document.getElementById('navModal');
const closeMenu = document.getElementById('closeMenu');

burger.addEventListener('click', () => {
  navModal.classList.add('open');
  burger.classList.add('burger-hidden');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  navModal.classList.remove('open');
  burger.classList.remove('burger-hidden');
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', e => {
  if (e.target === navModal) {
    navModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
});

const links = document.querySelectorAll('.nav-list a');

links.forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('data-link');

    navModal.classList.remove('open');
    burger.classList.remove('burger-hidden');
    document.body.style.overflow = 'auto';

    setTimeout(() => {
      window.location.href = target;
    }, 200);
  });
});
