const navLinks = document.querySelectorAll(".nav-link");

// Function to remove 'active-link' from all links
function removeActiveClasses() {
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
  });
}

// Add click event listeners to each nav-link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClasses(); // Remove 'active-link' from all links
    this.classList.add("active-link"); // Add 'active-link' to the clicked link
  });
});

 // Select the elements
const menuToggle = document.querySelector(".menu-toggle");
const navbarNav = document.getElementById("navbarNav");
const body = document.body; // Get the body element

// Add click event listener
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("openNav"); // Toggle the menu icon
  navbarNav.classList.toggle("openNav"); // Toggle the navbar visibility
  
  // Toggle the "open-sidebar" class on the body element
  body.classList.toggle("open-sidebar");
});

// who we serve section

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-card");
  const mainImage = document.getElementById("main-image");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the 'active' class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add the 'active' class to the clicked tab
      this.classList.add("active");

      // Get the image path from data-image attribute and set it to the main image
      const newImage = this.getAttribute("data-image");
      mainImage.src = newImage;
    });
  });
});



var swiper1 = new Swiper(".Testimonial", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination" ,
      clickable: true,
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    loop: true,  
    grabCursor: true,  

    breakpoints: {
        // when the screen is >= 320px
        320: {
          slidesPerView: 1,  // Show 1 slide on small screens
          spaceBetween: 10,  // Smaller space between slides
        },
        // when the screen is >= 768px
        768: {
          slidesPerView: 2,  // Show 2 slides on tablets
          spaceBetween: 20,  // Adjust space between slides
        },
        // when the screen is >= 1024px
        1024: {
          slidesPerView: 3,  // Show 3 slides on larger screens (desktops)
          spaceBetween: 30,  // Original space between slides
        }
      }
   
  });


  // Brand slider 


  var swiper2 = new Swiper(".brand-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination" ,
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000, 
    //   disableOnInteraction: false, 
    // },
    loop: true,  
    grabCursor: true,  

    breakpoints: { 
        320: {
          slidesPerView: 1,   
          spaceBetween: 10,   
        }, 
        768: {
          slidesPerView: 2,  
          spaceBetween: 20,  
        }, 
        1024: {
          slidesPerView: 3, 
          spaceBetween: 30, 
        }
      }
   
  });

  var swiper3 = new Swiper(".housing-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination" ,
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000, 
    //   disableOnInteraction: false, 
    // },
    loop: true,  
    grabCursor: true,  

    breakpoints: { 
        320: {
          slidesPerView: 1,   
          spaceBetween: 10,   
        }, 
        768: {
          slidesPerView: 2,  
          spaceBetween: 20,  
        }, 
        1024: {
          slidesPerView: 3, 
          spaceBetween: 30, 
        }
      }
   
  });


  var swiper3 = new Swiper(".video-testimonial", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination" ,
      clickable: true, 
      dynamicBullets: true,
    },
    // autoplay: {
    //   delay: 3000, 
    //   disableOnInteraction: false, 
    // },
    loop: true,  
    grabCursor: true, 
  });





// sticky header
  window.onscroll = function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };




// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn"); 
window.onscroll = function() { 
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}; 
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll to the top
  });
});

 


// Home banner js

  document.addEventListener("DOMContentLoaded", function() {
    const words = ["Learning", "Skill Development", "Professional Certifications"];
    let wordIndex = 0;
    let letterIndex = 0;
    const typingSpeed = 100;  // Speed of typing each letter
    const erasingSpeed = 50;  // Speed of erasing each letter
    const delayBetweenWords = 2000;  // Time before starting to erase the word
    const typedWord = document.getElementById("typed-word");

    function typeWord() {
      if (letterIndex < words[wordIndex].length) {
        typedWord.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWord, typingSpeed);
      } else {
        setTimeout(eraseWord, delayBetweenWords);  // Start erasing after delay
      }
    }

    function eraseWord() {
      if (letterIndex > 0) {
        typedWord.textContent = typedWord.textContent.slice(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseWord, erasingSpeed);
      } else {
        wordIndex = (wordIndex + 1) % words.length;  // Move to the next word
        setTimeout(typeWord, typingSpeed);
      }
    }

    // Start typing the first word
    typeWord();
  });
 
// Home banner js end


//  copyright 

const currentYear = new Date().getFullYear();
  
// Update the span with the current year
document.getElementById('copyrights-year').textContent = currentYear;