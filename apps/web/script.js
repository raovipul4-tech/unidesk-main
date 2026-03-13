// Navigation function
function goToPage(page) {
    window.location.href = page;
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Simple mobile menu toggle
            const nav = document.querySelector('.desktop-nav');
            if (nav) {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a, .footer-section a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Form submission handler
function handleFormSubmit(e) {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        // Simple form handling
        const formData = new FormData(e.target);
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message
        alert('Thank you! We will get back to you soon.');
        e.target.reset();
    }
}