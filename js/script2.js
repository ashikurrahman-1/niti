


// Responsive Navbar
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-icon');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('menu-show');
  });

  document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
          navMenu.classList.remove('menu-show');
      }
  });

  window.addEventListener('scroll', () => {
      navMenu.classList.remove('menu-show');
  });
});



// About section carousel
$(document).ready(function(){
    // About Section
    $('.about').owlCarousel({
        loop:true,
        items: 3,
        margin:50,
        nav:true,
        dots: false,
        autoplay: true,
        smartSpeed: 800,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Review section carousel
    $('.review').owlCarousel({
        loop:true,
        items: 4,
        margin:50,
        nav:true,
        dots: false,
        autoplay: true,
        smartSpeed: 800,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
        }
    });


    // Achievement section carousel
    $('.home-achievements').owlCarousel({
        loop:true,
        items: 1,
        margin:50,
        nav:true,
        dots: false,
        autoplay: true,
        smartSpeed: 800
    });
    

    // Newspaper Highlights in about page 
    $('.newspaper-highlights').owlCarousel({
        loop:true,
        items: 1,
        margin:50,
        nav:true,
        dots: false,
        autoplay: true,
        smartSpeed: 800,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
});


// Clear cache function
async function clearCache() {
    try {
      const cacheNames = await window.caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => window.caches.delete(cacheName))
      );
      console.log('Cache cleared');
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
  
  clearCache();
  

// sidebar visible and hide 
window.addEventListener('scroll', function() {
  let sidebar = document.getElementById('sidebar');
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.scrollHeight;
  let distanceFromBottomToHide = 900;

  // If scroll position is greater than or equal to 800px, show the sidebar
  if (scrollPosition >= 800) {
      sidebar.classList.add('sidebar-visible');
  } else {
      sidebar.classList.remove('sidebar-visible');
  }

  // Hide sidebar when reaching the end of the page before 900px
  if (scrollPosition + windowHeight >= documentHeight - distanceFromBottomToHide && sidebar.classList.contains('sidebar-visible')) {
      sidebar.classList.remove('sidebar-visible');
  }
});


// sidebar visible and hide 
window.addEventListener('scroll', function() {
  let sidebar = document.getElementById('sidebar2');
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.scrollHeight;
  let distanceFromBottomToHide = 900;

  // If scroll position is greater than or equal to 800px, show the sidebar
  if (scrollPosition >= 800) {
      sidebar.classList.add('sidebar-visible');
  } else {
      sidebar.classList.remove('sidebar-visible');
  }

  // Hide sidebar when reaching the end of the page before 900px
  if (scrollPosition + windowHeight >= documentHeight - distanceFromBottomToHide && sidebar.classList.contains('sidebar-visible')) {
      sidebar.classList.remove('sidebar-visible');
  }
});



/* Online join video section */
function toggle(){
  let joinVdo = document.querySelector('.join-video');

  let video = document.querySelector('.j-Vdo');

  joinVdo.classList.toggle('active');
  video.pause();
  video.currentTime = 0;
}

// Venobox Popups
new VenoBox();


    // Back to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

    document.getElementById("myBtn").style.transition = "all 2s";
  }
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrolltop = 0;
  document.documentElement.scrollTop = 0;

  let body = $("html, body");
      body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
           console.log("Animation has finished");
      });
}





