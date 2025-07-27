const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
// Slider Script
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 4000); // Change slide every 4 seconds

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // simple validation
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (email.includes('@') && message.length > 10) {
    alert('Message sent!'); 
    this.reset();
  } else {
    alert('Please enter a valid email and message.');
  }
});
const buttons = document.querySelectorAll('.read-more');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        modalText.innerText = button.getAttribute('data-content');
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

