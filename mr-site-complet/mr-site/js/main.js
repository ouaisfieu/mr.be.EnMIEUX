/* ============================================
   MR EN MIEUX - Le Mouvement Radical
   JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Scroll Effects
    initScrollEffects();
    
    // Accordions
    initAccordions();
    
    // Counter Animation
    initCounters();
    
    // Form Validation
    initForms();
    
    // Smooth Scroll
    initSmoothScroll();
});

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

/* ============================================
   SCROLL EFFECTS
   ============================================ */
function initScrollEffects() {
    const header = document.querySelector('header');
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    // Header shadow on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });
    
    // Reveal elements on scroll
    const revealOnScroll = () => {
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 100) {
                el.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

/* ============================================
   ACCORDIONS
   ============================================ */
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordions
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling?.classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content?.classList.add('active');
            }
        });
    });
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    let countersAnimated = false;
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                    const suffix = counter.getAttribute('data-suffix') || '';
                    counter.textContent += suffix;
                }
            };
            updateCounter();
        });
    };
    
    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && counters.length > 0) {
        window.addEventListener('scroll', () => {
            if (!countersAnimated) {
                const rect = statsSection.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    animateCounters();
                    countersAnimated = true;
                }
            }
        });
    }
}

/* ============================================
   FORM HANDLING
   ============================================ */
function initForms() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
                
                // Email validation
                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Votre message a été envoyé avec succès !', 'success');
                form.reset();
            } else {
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            }
        });
    });
}

/* ============================================
   NOTIFICATIONS
   ============================================ */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles if not exists
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 15px 45px 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            .notification-success { background: #28a745; }
            .notification-error { background: #dc3545; }
            .notification-info { background: #004a99; }
            .notification-close {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => notification.remove(), 5000);
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   TABS
   ============================================ */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabGroup = this.closest('.tabs');
            const targetId = this.getAttribute('data-tab');
            
            // Remove active from all tabs and panels
            tabGroup.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            tabGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            
            // Add active to clicked tab and panel
            this.classList.add('active');
            tabGroup.querySelector(`#${targetId}`)?.classList.add('active');
        });
    });
}

/* ============================================
   NEWSLETTER FORM
   ============================================ */
function subscribeNewsletter(email) {
    // Simulated newsletter subscription
    if (email && email.includes('@')) {
        showNotification('Merci pour votre inscription à notre newsletter !', 'success');
        return true;
    }
    showNotification('Veuillez entrer une adresse email valide.', 'error');
    return false;
}

/* ============================================
   GLOBAL MENU TOGGLE FUNCTION
   ============================================ */
window.toggleMenu = function() {
    const nav = document.querySelector('nav');
    nav?.classList.toggle('active');
};
