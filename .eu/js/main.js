/* ============================================
   LE RENOUVEAU - JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initSmoothScroll();
    initForms();
    initParallax();
});

/* ============================================
   Header Scroll Effect
   ============================================ */
function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ============================================
   Scroll Reveal Animations
   ============================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Handle staggered children
                const staggerChildren = entry.target.querySelectorAll('.reveal-child');
                staggerChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('active');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

/* ============================================
   Counter Animations
   ============================================ */
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    if (!counters.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-counter'));
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const suffix = element.getAttribute('data-suffix') || '';
        const prefix = element.getAttribute('data-prefix') || '';
        
        let startTime = null;
        const startValue = 0;

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
            
            element.textContent = prefix + currentValue.toLocaleString('fr-FR') + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   Form Handling
   ============================================ */
function initForms() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            // Remove previous errors
            form.querySelectorAll('.form-error').forEach(error => error.remove());
            form.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    showFieldError(field, 'Ce champ est requis');
                } else if (field.type === 'email' && !isValidEmail(field.value)) {
                    isValid = false;
                    showFieldError(field, 'Email invalide');
                }
            });

            if (isValid) {
                showNotification('Votre message a été envoyé avec succès !', 'success');
                form.reset();
            }
        });
    });
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    errorEl.style.cssText = 'color: var(--color-error); font-size: 0.75rem; margin-top: 4px; display: block;';
    field.parentNode.appendChild(errorEl);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================================
   Notifications
   ============================================ */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const colors = {
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        info: 'var(--color-accent)'
    };

    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="Fermer">×</button>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 48px 16px 24px;
        background: ${colors[type] || colors.info};
        color: white;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    notification.querySelector('.notification-close').style.cssText = `
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        opacity: 0.8;
    `;

    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    setTimeout(() => notification.remove(), 5000);
}

/* ============================================
   Parallax Effects
   ============================================ */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
            const rect = el.getBoundingClientRect();
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = scrolled * speed;
                el.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

/* ============================================
   Accordion
   ============================================ */
function initAccordion() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const headers = accordion.querySelectorAll('.accordion-header');

        headers.forEach(header => {
            header.addEventListener('click', () => {
                const isActive = header.classList.contains('active');
                
                // Close all
                headers.forEach(h => {
                    h.classList.remove('active');
                    h.nextElementSibling?.classList.remove('active');
                });

                // Open clicked if wasn't active
                if (!isActive) {
                    header.classList.add('active');
                    header.nextElementSibling?.classList.add('active');
                }
            });
        });
    });
}

/* ============================================
   Tabs
   ============================================ */
function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('.tab-btn');
        const panels = container.querySelectorAll('.tab-panel');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-tab');

                buttons.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                container.querySelector(`#${target}`)?.classList.add('active');
            });
        });
    });
}

/* ============================================
   Newsletter Subscribe
   ============================================ */
window.subscribeNewsletter = function(formElement) {
    const email = formElement.querySelector('input[type="email"]').value;
    
    if (email && isValidEmail(email)) {
        showNotification('Merci ! Vous êtes inscrit à notre newsletter.', 'success');
        formElement.reset();
    } else {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
    }
};

/* ============================================
   Utility Functions
   ============================================ */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   Page Specific Initializations
   ============================================ */
// Call additional initializers if needed
if (document.querySelector('.accordion')) {
    initAccordion();
}

if (document.querySelector('.tabs')) {
    initTabs();
}
