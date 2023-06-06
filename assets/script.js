function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click',function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click' , function() {
    addclass.classList.remove('showmenu')
})


const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click',toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((itme) => itme != this ? itme.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}


// Get all slide elements
var slides = document.getElementsByClassName('slide');

// Set initial slide index
var currentSlideIndex = 0;

// Show the first slide
slides[currentSlideIndex].classList.add('active');

// Function to show next slide
function nextSlide() {
  // Hide the current slide
  slides[currentSlideIndex].classList.remove('active');

  // Increment the slide index
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Show the next slide
  slides[currentSlideIndex].classList.add('active');
}

// Set interval to automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);


