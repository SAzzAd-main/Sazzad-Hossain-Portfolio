const buttons = document.querySelectorAll('.nav-links button');
const sections = document.querySelectorAll('section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.innerText.toLowerCase().replace(/\s+/g, '');
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      buttons.forEach(b => b.classList.remove('active'));

      buttons.forEach(btn => {
        const targetId = btn.innerText.toLowerCase().replace(/\s+/g, '');
        if (targetId === section.id) {
          btn.classList.add('active');
        }
      });
    }
  });
});
