document.addEventListener('DOMContentLoaded', () => {

  const toggleBtn = document.querySelector('.social-toggle');
  const socials = document.querySelector('.socials');

  toggleBtn.addEventListener('click', () => {
    socials.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  const contactBtn = document.querySelector('.contact-btn');
  const modal = document.querySelector('.contact-modal');

  contactBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

});
