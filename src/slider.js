const carousel = document.getElementById('carousel');
const images = carousel.children;
const totalImages = images.length;
let index = 0;

// Auto-Slide Functionality
const autoSlide = () => {
  index = (index + 1) % totalImages;
  updateCarousel();
};

// Update Carousel Position
const updateCarousel = () => {
  const offset = index * -100; // Slide width is 100% of the container
  carousel.style.transform = `translateX(${offset}%)`;
};

// Manual Navigation
document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % totalImages;
  updateCarousel();
});

// Auto-Slide Timer
setInterval(autoSlide, 2000); // 2 seconds



window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav li");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.textContent.toLowerCase() === current) {
        link.classList.add("active");
      }
    });
  });