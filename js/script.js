function scrollMove() {
  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('header nav ul a');

  window.onscroll = () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        links.forEach((link) => {
          link.classList.remove('active');
          document
            .querySelector('nav a[href*=' + id + ']')
            .classList.add('active');
        });
      }
    });
  };
}

scrollMove();

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length > 0) {
    function scrollAnimation() {
      const windowMiddle = window.innerHeight * 0.6;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const inSectionVisible = sectionTop - windowMiddle < 0;
        if (inSectionVisible) section.classList.add('active');
        else {
          section.classList.remove('active');
        }
      });
    }

    scrollAnimation();
    window.addEventListener('scroll', scrollAnimation);
  }
}

initScrollAnimation();
