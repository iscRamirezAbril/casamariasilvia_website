function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
        navbar.classList.add('bg-light');
      } else {
        navbar.classList.remove('bg-light');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);