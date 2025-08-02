
    document.addEventListener('DOMContentLoaded', function() {
      // Dark mode functionality
      const darkModeToggle = document.querySelector('.dark-mode-toggle');
      const body = document.body;
      const toggleIcon = darkModeToggle.querySelector('i');
      
      // Check for saved dark mode preference
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode === 'true') {
        body.classList.add('dark-mode');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
      }
      
      // Toggle dark mode
      darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
          toggleIcon.classList.remove('fa-moon');
          toggleIcon.classList.add('fa-sun');
          localStorage.setItem('darkMode', 'true');
          
          // Trigger dark mode animations
          triggerDarkModeAnimations();
        } else {
          toggleIcon.classList.remove('fa-sun');
          toggleIcon.classList.add('fa-moon');
          localStorage.setItem('darkMode', 'false');
          
          // Stop dark mode animations
          stopDarkModeAnimations();
        }
      });
      
      // Dark mode animation functions
      function triggerDarkModeAnimations() {
        // Animate scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
          scrollIndicator.style.animation = 'none';
          setTimeout(() => {
            scrollIndicator.style.animation = 'scrollProgress 2s ease-out';
          }, 10);
        }
        
        // Show and add matrix rain effect
        const matrixRain = document.querySelector('.matrix-rain');
        if (matrixRain) {
          matrixRain.style.display = 'block';
          const matrixColumns = document.querySelectorAll('.matrix-column');
          matrixColumns.forEach((column, index) => {
            column.style.animationDelay = `${index * 2}s`;
          });
        }
        
        // Add floating orbs animation
        const darkOrbs = document.querySelectorAll('.dark-orb');
        darkOrbs.forEach((orb, index) => {
          orb.style.animationDelay = `${index * 5}s`;
        });
      }
      
      function stopDarkModeAnimations() {
        // Reset scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
          scrollIndicator.style.animation = 'none';
        }
        
        // Hide matrix rain
        const matrixRain = document.querySelector('.matrix-rain');
        if (matrixRain) {
          matrixRain.style.display = 'none';
        }
      }
      
      // Initialize dark mode animations if already in dark mode
      if (body.classList.contains('dark-mode')) {
        triggerDarkModeAnimations();
      }
      
      
      // Mobile menu functionality
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const navUl = document.querySelector('nav ul');
      
      mobileMenuBtn.addEventListener('click', function() {
        navUl.classList.toggle('active');
      });
      
      // Close menu when clicking on a link
      const navLinks = document.querySelectorAll('nav ul li a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navUl.classList.remove('active');
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!navUl.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          navUl.classList.remove('active');
        }
      });
      
      // Back to top functionality
      const backToTopBtn = document.getElementById('backToTop');
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      });
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Navigation highlight on scroll
      function highlightNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
          }
        });
      }
      window.addEventListener('scroll', highlightNav);
      document.addEventListener('DOMContentLoaded', highlightNav);
    });
  
  AOS.init({
    duration: 900,
    once: true
  });
  // 1. Initialize particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60 },
      "size": { "value": 3 },
      "color": { "value": "#ffb6c1" },
      "line_linked": { "enable": true, "color": "#ffb6c1" }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" }
      }
    }
  });
  // 2. Parallax effect for floating circles
  const parallaxEls = document.querySelectorAll('.parallax-float');
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    parallaxEls.forEach((el, i) => {
      const speed = 0.15 + (i * 0.07);
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
  // 3. 3D Tilt for profile image
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05
  });
  // 4. Typewriter effect for name
  const text = "Tan Wei Ting";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 120);
    }
  }
  typeWriter();
  
  // 5. Magnetic Hover Effect
  const magneticElements = document.querySelectorAll('.magnetic-hover');
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0px, 0px)';
    });
  });
  
  // 6. Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
  
  // 7. Parallax Mouse Movement
  const parallaxElements = document.querySelectorAll('.parallax-mouse');
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.1;
      const x = (mouseX - 0.5) * speed * 20;
      const y = (mouseY - 0.5) * speed * 20;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  
  // 8. Add reveal-on-scroll class to skill cards and project cards
  document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.classList.add('reveal-on-scroll');
  });
  
  // 9. Add magnetic hover to social icons
  document.querySelectorAll('.social-icon, .social-icons a').forEach(icon => {
    icon.classList.add('magnetic-hover');
  });
  
  // 10. Add neon glow to important text
  document.querySelectorAll('.highlight, .cert-title, .project-info h3').forEach(text => {
    text.classList.add('neon-glow');
  });
  
  // 11. Apply glitch effect to section titles
  document.querySelectorAll('.section-title').forEach(title => {
    title.classList.add('glitch-effect');
    title.setAttribute('data-text', title.textContent);
  });
  
  // 12. Apply pulse animation to social icons
  document.querySelectorAll('.social-icon, .social-icons a').forEach(icon => {
    icon.classList.add('pulse-on-hover');
  });
  
  // 13. Apply bounce animation to skill icons
  document.querySelectorAll('.skill-card i').forEach(icon => {
    icon.classList.add('bounce-on-hover');
  });
  
  // 14. Apply scale animation to project images
  document.querySelectorAll('.project-card img').forEach(img => {
    img.classList.add('scale-on-hover');
  });
  
  // 15. Apply rotate animation to certification badges
  document.querySelectorAll('.cert-badge').forEach(badge => {
    badge.classList.add('rotate-on-hover');
  });
  
  // 16. Apply wave animation to contact illustration
  document.querySelectorAll('.contact-illustration i').forEach(icon => {
    icon.classList.add('wave-animation');
  });
  
  // 17. Apply glow pulse to profile image container
  document.querySelector('.profile-image-container').classList.add('glow-pulse');
  
  // 18. Apply slide in animations to timeline items
  document.querySelectorAll('.timeline-item:nth-child(odd)').forEach(item => {
    item.classList.add('slide-in-left');
  });
  
  document.querySelectorAll('.timeline-item:nth-child(even)').forEach(item => {
    item.classList.add('slide-in-right');
  });
  
  // 19. Apply fade in animation to about content
  document.querySelector('.about-content').classList.add('fade-in');
  
  // 20. Apply shake animation to form inputs on focus
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
      this.classList.add('shake-on-hover');
    });
    input.addEventListener('blur', function() {
      this.classList.remove('shake-on-hover');
    });
  });
  
  // 21. Enhanced magnetic hover for profile image
  const profileImage = document.querySelector('.profile-image-container');
  profileImage.addEventListener('mousemove', (e) => {
    const rect = profileImage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    profileImage.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
  });
  
  profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'translate(0px, 0px) scale(1)';
  });
  
  // 22. Parallax effect for floating decorative circles
  const floatingCircles = document.querySelectorAll('svg circle');
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    floatingCircles.forEach((circle, index) => {
      const speed = 0.1 + (index * 0.02);
      const x = (mouseX - 0.5) * speed * 30;
      const y = (mouseY - 0.5) * speed * 30;
      circle.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  
  // 23. Smooth reveal animation for all cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.skill-card, .project-card, .timeline-content').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    cardObserver.observe(card);
  });
  
  // 24. Liquid button effect for submit button
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 10px 25px rgba(255, 107, 139, 0.4)';
  });
  
  submitBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 5px 15px rgba(255, 107, 139, 0.3)';
  });
  
  // 25. Enhanced hover effects for navigation
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.textShadow = '0 2px 8px rgba(255, 107, 139, 0.3)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.textShadow = 'none';
    });
  });
