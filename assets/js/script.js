// On load 
window.onload = function() {
  window.scrollTo(0, 0);
};
// On load End

// Navbar responsive 

  const menuIcon = document.getElementById('menu-icon');
  const closeBtn = document.getElementById('close-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');


  menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.add('open');
  });


  closeBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('open');
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      dropdownMenu.classList.remove('open');
    }
  });


  // Scroll up navbar

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');


navbar.style.top = '0';

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-100px';
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
// navbar end section
  
// Home text slide animation and timeing

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.classList.remove('fade-out');
        } else {
            slide.classList.remove('active');
            slide.classList.add('fade-out');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);

// Home slide End section


// sponsor section infinite scrolling
  
  const wrapper = document.querySelector('.scroll-wrapper');
  const clone = wrapper.cloneNode(true);
  wrapper.parentNode.appendChild(clone);

// sponsor section End

// Back to TOP button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Smooth scroll to top function
mybutton.addEventListener('click', function() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 100;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});

// Back to TOP button End