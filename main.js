
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('toggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = ''; 
  } else {
    themeIcon.textContent = '';
  }
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');

  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = ''; 
  } else {
    themeIcon.textContent = ''; 
  }
});

// configuration for menu
function toggleMenu() {
  const dropmenu = document.querySelector('.searchbox');
  dropmenu.classList.toggle('show');
}

function togglemenuDown(element) {
  const down = document.querySelector('.dropdownmenu');
  const items = document.querySelector('.items1');
  const name = document.querySelector('.brand-name');
  element.classList.toggle("active");
  down.classList.toggle('show');

  if (down.classList.contains('show')) {
    items.style.display = 'none';
    name.style.display = 'none';
  } else {
    items.style.display = 'inline';
    name.style.display = 'inline';
  }
}


// configuration for next/button images
let currentSlide = 0;
function moveSlide(direction) {
  const slides = document.querySelectorAll('.slideshow-container img');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; 
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; 
  }
  const slideWidth = slides[0].clientWidth; 
  const container = document.querySelector('.slideshow-container');
  container.style.transform = `translateX(-${currentSlide * slideWidth}px)`; 
}
 
const signupBtn = document.getElementById('sign-up');
signupBtn.addEventListener('click', (e) => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
  if (!anyChecked) {
    e.preventDefault();
    alert('Please check at least one option.');
  }
});

  setTimeout(() => {
 const loading = document.getElementById('loading');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none';
    main.style.zIndex = '1000';
  }
},2000);
                
 setTimeout(() => {
  const loading = document.getElementById('ack');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none'; 
    main.style.zIndex = '1000';
  }
}, 2000); 

