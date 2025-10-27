document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // 2. Buy Now / CTA Button Logic
    const buyNowButtons = document.querySelectorAll('.btn[data-ticket]');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const ticketType = e.currentTarget.getAttribute('data-ticket');
            openWhatsApp(ticketType);
        });
    });

    // Optional: Simple scroll animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Opsional: hilangkan kelas 'visible' saat tidak terlihat
                entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.1 // Mulai aktif saat 10% bagian terlihat
    });

    sections.forEach(section => {
        section.classList.add('fade-in'); // Tambahkan kelas untuk CSS
        observer.observe(section);
    });
});

// 3. WhatsApp CTA Function
function openWhatsApp(ticketType = 'General Inquiry') {
    const phoneNumber = '6282110985412'; // Format internasional: +62 821 1098 5412
    let message = `Hello Abelle Tickets, I'd like to inquire about the Hindia New Album Tour Tickets.`;
    
    if (ticketType && ticketType !== 'General Inquiry') {
        message = `Hello Abelle Tickets, I'm interested in buying the *${ticketType}* ticket for Hindia's New Album Tour. Could you please provide details on how to proceed?`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

/* Tambahkan sedikit CSS untuk fade-in animation yang digunakan di JS */
/* (Idealnya ini ada di style.css, tapi saya masukkan di sini sebagai catatan)
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
*/