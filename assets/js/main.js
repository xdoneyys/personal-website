// ==================== HAMBURGER MENU TOGGLE ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Animasi hamburger
        const spans = this.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}

// Tutup menu saat link diklik (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// ==================== HIGHLIGHT ACTIVE MENU ====================
// Menandai menu aktif berdasarkan URL saat ini
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Jika link adalah index.html atau '/'
        if (currentPath === '/' && linkPath === 'index.html') {
            link.classList.add('active');
        }
        // Jika link cocok dengan path saat ini
        else if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        }
        // Untuk file yang sama (misal: about.html)
        else if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLL (Opsional) ====================
// Untuk link internal dengan hash (contoh: #section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CONTACT FORM VALIDATION ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah pengiriman default
        
        // Ambil nilai input
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validasi sederhana
        let errors = [];
        
        if (!name) {
            errors.push('Nama lengkap harus diisi');
        }
        
        if (!email) {
            errors.push('Email harus diisi');
        } else if (!isValidEmail(email)) {
            errors.push('Format email tidak valid');
        }
        
        if (!subject) {
            errors.push('Subjek harus diisi');
        }
        
        if (!message) {
            errors.push('Pesan harus diisi');
        }
        
        // Tampilkan hasil validasi
        if (errors.length > 0) {
            alert('❌ ' + errors.join('\n'));
        } else {
            alert('✅ Pesan berhasil dikirim! (Demo - belum terhubung ke server)');
            this.reset(); // Reset form
        }
    });
}

// Fungsi validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== ANIMASI SCROLL (Opsional) ====================
// Efek fade-in saat elemen muncul di viewport
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Terapkan pada card dan elemen tertentu
    document.querySelectorAll('.post-card, .about-content, .contact-form, .contact-info').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== HAMBURGER ANIMATION ====================
// Style tambahan untuk animasi hamburger
const style = document.createElement('style');
style.textContent = `
    .hamburger span.active:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger span.active:nth-child(2) {
        opacity: 0;
    }
    .hamburger span.active:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);

console.log('✨ Website [Nama Anda] siap!');