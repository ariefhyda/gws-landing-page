// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar Scroll Effect (Glassmorphism intensity change)
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
});

// Simple Reveal Animation on Scroll
const revealElements = document.querySelectorAll('.service-card, .edu-card, .feature-list li, .section-header');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(el);
});

// Translations
const translations = {
    id: {
        nav_home: "Beranda",
        nav_tech: "Tech Solution",
        nav_pub: "Publishing",
        nav_edu: "Education",
        nav_contact: "Hubungi Kami",
        hero_badge: "Innovation & Integrity",
        hero_title: "Solusi Terpadu untuk <br><span class=\"highlight\">Masa Depan Digital</span>",
        hero_desc: "GWS Group menghadirkan layanan profesional di bidang Solusi ICT, Publikasi Ilmiah, serta Vokasi dan Sertifikasi untuk mendukung pertumbuhan bisnis Anda.",
        hero_btn_explore: "Jelajahi Layanan",
        hero_btn_consult: "Konsultasi Gratis",
        strip_tech: "ICT Terintegrasi",
        strip_pub: "Publikasi Ilmiah",
        strip_edu: "Vokasi & Sertifikasi",
        tech_title: "Solusi ICT Terpadu & Inovatif",
        tech_desc: "Mendukung transformasi digital dengan teknologi adaptif dan berorientasi bisnis.",
        tech_soft_title: "Pengembangan Software",
        tech_soft_desc: "Aplikasi Desktop, Website, dan Mobile yang fungsional, aman, dan scalable sesuai kebutuhan bisnis Anda.",
        tech_ai_title: "Artificial Intelligence (AI)",
        tech_ai_desc: "Solusi AI untuk otomasi, analisis data cerdas, dan pengambilan keputusan berbasis data.",
        tech_iot_title: "Internet of Things (IoT)",
        tech_iot_desc: "Sistem monitoring dan kontrol real-time untuk industri, pendidikan, dan smart system.",
        tech_net_title: "Jaringan & Server",
        tech_net_desc: "Instalasi dan troubleshooting LAN/WAN/Wireless serta konfigurasi server yang stabil.",
        tech_brand_title: "Digital Branding",
        tech_brand_desc: "Strategi digital untuk membangun identitas merek dan optimalisasi citra perorangan, bisnis, maupun organisasi.",
        pub_title: "Publikasi Ilmiah & Kekayaan Intelektual",
        pub_desc: "Mitra terpercaya akademisi dan peneliti dalam diseminasi karya ilmiah dan perlindungan inovasi.",
        pub_journal_title: "Jurnal Ilmiah Nasional & Internasional",
        pub_journal_desc: "Fasilitasi publikasi di JAIS, JRES, JABDA, JACS, dan lainnya dengan pendampingan penuh.",
        pub_book_title: "Penerbitan Buku Ber-ISBN",
        pub_book_desc: "Layanan editing, layout, cover, hingga registrasi ISBN untuk buku ajar dan referensi.",
        pub_hki_title: "Hak Cipta & Merek Dagang",
        pub_hki_desc: "Pendampingan pendaftaran HKI untuk perlindungan hukum aset intelektual Anda.",
        edu_title: "Vokasi & Sertifikasi Kompetensi",
        edu_desc: "Meningkatkan daya saing SDM melalui pendidikan vokasi dan sertifikasi berstandar nasional & internasional.",
        edu_voc_title: "Konsultasi Vokasi",
        edu_voc_desc: "Perencanaan & Penerapan Ekosistem Akademik & Non Akademik berbasis Kompetensi & Kebutuhan Industri.",
        edu_tefa_title: "Teaching Factory (TeFa)",
        edu_tefa_desc: "Pengembangan ekosistem pembelajaran berbasis produksi nyata.",
        edu_bnsp_title: "Sertifikasi BNSP",
        edu_bnsp_desc: "Fasilitasi sertifikasi kompetensi resmi via LSP P3 untuk berbagai bidang.",
        edu_intl_title: "Sertifikasi Internasional",
        edu_intl_desc: "Program sertifikasi dari Huawei, AWS, Google, Microsoft, dll.",
        info_detail: "Info Detail",
        cta_title: "Siap untuk Memulai?",
        cta_desc: "Hubungi GWS Group hari ini untuk solusi terbaik bagi kebutuhan organisasi Anda.",
        cta_btn_contact: "Hubungi Kami",
        cta_btn_learn: "Pelajari Lebih Lanjut",
        footer_desc: "Mitra strategis solusi ICT, Publikasi, Vokasi dan Sertifikasi untuk Masa Depan yang Lebih Baik.",
        footer_services: "Layanan",
        footer_contact: "Kontak",
        team_title: "Tim Profesional Kami",
        team_desc: "Berdedikasi untuk memberikan solusi terbaik dengan keahlihan dan integritas.",
        cta_whatsapp: "WhatsApp",
        cta_email: "Email",
        cta_map: "Rute"
    },
    en: {
        nav_home: "Home",
        nav_tech: "Tech Solution",
        nav_pub: "Publishing",
        nav_edu: "Education",
        nav_contact: "Contact Us",
        hero_badge: "Innovation & Integrity",
        hero_title: "Integrated Solutions for <br><span class=\"highlight\">Digital Future</span>",
        hero_desc: "GWS Group provides professional services in ICT Solutions, Scientific Publishing, and Vocational & Certification to support your business growth.",
        hero_btn_explore: "Explore Services",
        hero_btn_consult: "Free Consultation",
        strip_tech: "Integrated ICT",
        strip_pub: "Scientific Publishing",
        strip_edu: "Vocational & Certification",
        tech_title: "Integrated & Innovative ICT Solutions",
        tech_desc: "Supporting digital transformation with adaptive and business-oriented technology.",
        tech_soft_title: "Software Development",
        tech_soft_desc: "Functional, secure, and scalable Desktop, Website, and Mobile applications tailored to your business needs.",
        tech_ai_title: "Artificial Intelligence (AI)",
        tech_ai_desc: "AI solutions for automation, intelligent data analysis, and data-driven decision making.",
        tech_iot_title: "Internet of Things (IoT)",
        tech_iot_desc: "Real-time monitoring and control systems for industry, education, and smart systems.",
        tech_net_title: "Network & Server",
        tech_net_desc: "Installation and troubleshooting of LAN/WAN/Wireless and stable server configuration.",
        tech_brand_title: "Digital Branding",
        tech_brand_desc: "Digital strategies to build brand identity and optimize the image of individuals, businesses, and organizations.",
        pub_title: "Scientific Publishing & Intellectual Property",
        pub_desc: "Trusted partner for academics and researchers in scientific dissemination and innovation protection.",
        pub_journal_title: "National & International Journals",
        pub_journal_desc: "Facilitation of publication in JAIS, JRES, JABDA, JACS, and others with full support.",
        pub_book_title: "ISBN Book Publishing",
        pub_book_desc: "Editing, layout, cover design, and ISBN registration services for textbooks and reference books.",
        pub_hki_title: "Copyright & Trademark",
        pub_hki_desc: "IPR registration assistance for legal protection of your intellectual assets.",
        edu_title: "Vocational & Competency Certification",
        edu_desc: "Enhancing HR competitiveness through vocational education and national & international standard certification.",
        edu_voc_title: "Vocational Consulting",
        edu_voc_desc: "Planning & Implementation of Academic & Non-Academic Ecosystems based on Competency & Industry Needs.",
        edu_tefa_title: "Teaching Factory (TeFa)",
        edu_tefa_desc: "Development of production-based learning ecosystems.",
        edu_bnsp_title: "BNSP Certification",
        edu_bnsp_desc: "Official competency certification facilitation via LSP P3 for various fields.",
        edu_intl_title: "International Certification",
        edu_intl_desc: "Certification programs from Huawei, AWS, Google, Microsoft, etc.",
        info_detail: "More Info",
        cta_title: "Ready to Start?",
        cta_desc: "Contact GWS Group today for the best solutions for your organization's needs.",
        cta_btn_contact: "Contact Us",
        cta_btn_learn: "Learn More",
        footer_desc: "Strategic partner for ICT, Publishing, Vocational and Certification solutions for a Better Future.",
        footer_services: "Services",
        footer_contact: "Contact",
        team_title: "Our Professional Team",
        team_desc: "Dedicated to providing the best solutions with expertise and integrity.",
        cta_whatsapp: "WhatsApp",
        cta_email: "Email",
        cta_map: "Directions"
    }
};

// Language Switcher Logic
const langBtns = document.querySelectorAll('.lang-btn');
const elements = document.querySelectorAll('[data-i18n]');

function updateLanguage(lang) {
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});
