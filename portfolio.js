document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header-container').offsetHeight;
                const scrollOptions = {
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                };
                window.scrollTo(scrollOptions);
            }
        });
    });
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    document.querySelectorAll('.project-item').forEach(item => {
        const overlay = item.querySelector('.overlay');

        item.addEventListener('mouseenter', () => {
            overlay.style.transition = 'opacity 1.3s ease-in-out, transform 1.3s ease-in-out';
            overlay.style.opacity = '0.9';
            overlay.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            overlay.style.transition = 'opacity 1.3s ease-in-out, transform 1.3s ease-in-out';
            overlay.style.opacity = '0';
            overlay.style.transform = 'translateY(100%)';
        });
    });
    document.querySelectorAll('.read-more-btn, .download-cv-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const mobileNumber = document.getElementById('mobile-number').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!fullName || !email || !mobileNumber || !subject || !message) {
                alert('Please fill out all fields.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            alert('Thank you for your message! We will get back to you soon.');
            form.reset(); 
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    }
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Scroll Sections Active Link
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

   
    ScrollReveal({
        reset: true,
        distance: '2.5rem',
        duration: 2000,
        delay: 200
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

   
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'React Js Developer', 'Blogger'],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        loop: true,
        loopDelay: 1000
    });
});