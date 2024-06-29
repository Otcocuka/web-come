// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.works_frame');
    const speed1 = 0.2; // Speed for box1
    const speed2 = 0.3; // Speed for box2
  
    // Helper function to get initial positions
    const getInitialPosition = (element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return 0; // Return 0 if element is not found
    };
  
    // Initial positions for all sections
    const initialBox1Y = Array.from(sections).map(section => getInitialPosition(section.querySelector('.box1')));
    const initialBox2Y = Array.from(sections).map(section => getInitialPosition(section.querySelector('.box2')));
  
    // Helper function to check if element is in viewport
    const isInViewport = (element) => {
      if (!element) return false; // Return false if element is null
  
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Update the position of box1 and box2 based on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section, index) => {
        const box1 = section.querySelector('.box1');
        const box2 = section.querySelector('.box2');
  
        if (isInViewport(box1)) {
          const newPos1 = initialBox1Y[index] - scrollPosition * speed1;
          box1.style.transform = `translateY(${Math.max(0, newPos1)}px)`;
        }
  
        if (isInViewport(box2)) {
          const newPos2 = initialBox2Y[index] - scrollPosition * speed2;
          box2.style.transform = `translateY(${Math.max(0, newPos2)}px)`;
        }
      });
    };
  
    // Initial update on page load
    handleScroll();
  
    // Throttle scroll event to improve performance
    let throttleTimeout;
    window.addEventListener('scroll', () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 50); // Adjust throttle delay as needed
      }
    });
  });
  