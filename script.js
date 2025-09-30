// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// COMPLETE FILM DATA - Single source of truth
// Video options:
// - youtubeId: 'VIDEO_ID' for YouTube videos
// - vimeoId: 'VIDEO_ID' for Vimeo videos
// - video: null or omit for stills-only projects
const FILM_DATA = {
    'open-house': {
        title: 'Open House',
        type: 'Feature Film',
        year: '2025',
        duration: '102 min',
        video: null,
        credits: {
            'Director': 'Jonah Gleeman',
            'Production Company': 'Power Bunny LLC',
            'Cinematographer': 'Harnish Ambaliya',
            'Producer': 'Don John, Oliver Kiisa'
        },
        stills: [
            'assets/open-house-main.jpg',
            'assets/open-house-1.jpg',
            'assets/open-house-2.jpg',
            'assets/open-house-3.jpg',
            'assets/open-house-4.jpg',
            'assets/open-house-5.jpg',
            'assets/open-house-6.jpg',
            'assets/open-house-7.jpg',
            'assets/open-house-8.jpg'
        ]
    },
    'speak-less': {
        title: 'Speak Less',
        type: 'Feature Film',
        year: '2024',
        duration: '95 min',
        video: null,
        credits: {
            'Director': 'Kelley Kali',
            'Production Company': 'Her Pictures',
            '2nd Unit DP': 'Harnish Ambaliya'
        },
        stills: [
            'assets/speak-less-main.jpg',
            'assets/speak-less-1.jpg',
            'assets/speak-less-2.jpg',
            'assets/speak-less-3.jpg',
            'assets/speak-less-4.jpg',
            'assets/speak-less-5.jpg',
            'assets/speak-less-6.jpg',
            'assets/speak-less-7.jpg',
            'assets/speak-less-8.jpg'
        ]
    },
    'failure-to-launch': {
        title: 'Failure to Launch',
        type: 'TV Pilot (Sitcom)',
        year: '2024',
        duration: '30 min',
        youtubeId: 'o-YBDTqX_tQ', // Replaced placeholder ID
        credits: {
            'Director': 'Jay Mandyam',
            'Production Company': 'Television Academy Foundation',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/failure-to-launch-1.jpg',
            'assets/failure-to-launch-2.jpg',
            'assets/failure-to-launch-3.jpg',
            'assets/failure-to-launch-4.jpg',
            'assets/failure-to-launch-5.jpg',
            'assets/failure-to-launch-6.jpg',
            'assets/failure-to-launch-7.jpg',
            'assets/failure-to-launch-8.jpg'
        ]
    },
    'top-voices': {
        title: 'Top Voices',
        type: 'TV Pilot (Drama)',
        year: '2024',
        duration: '45 min',
        video: null,
        credits: {
            'Director': 'Isabelle Leonard',
            'Production Company': 'National Film Festival',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/top-voices-main.jpg',
            'assets/top-voices-1.jpg',
            'assets/top-voices-2.jpg',
            'assets/top-voices-3.jpg',
            'assets/top-voices-4.jpg',
            'assets/top-voices-5.jpg',
            'assets/top-voices-6.jpg',
            'assets/top-voices-7.jpg',
            'assets/top-voices-8.jpg'
        ]
    },
    'dead-pet-shark': {
        title: 'Dead Pet Shark',
        type: 'Short Film (35mm)',
        year: '2024',
        duration: '15 min',
        vimeoId: null,
        credits: {
            'Director': 'Misha Gankin',
            'Festival': 'Dances with Film NYC, Kodak Feature',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/dead-pet-shark-main.jpg',
            'assets/dead-pet-shark-1.jpg',
            'assets/dead-pet-shark-2.jpg',
            'assets/dead-pet-shark-3.jpg',
            'assets/dead-pet-shark-4.jpg',
            'assets/dead-pet-shark-5.jpg',
            'assets/dead-pet-shark-6.jpg',
            'assets/dead-pet-shark-7.jpg',
            'assets/dead-pet-shark-8.jpg'
        ]
    },
    'counterfeit': {
        title: 'Counterfeit',
        type: 'Short Film',
        year: '2024',
        duration: '12 min',
        video: null,
        credits: {
            'Director': 'Margaret Seid',
            'Production': 'Independent',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/counterfeit-main.jpg',
            'assets/counterfeit-1.jpg',
            'assets/counterfeit-2.jpg',
            'assets/counterfeit-3.jpg',
            'assets/counterfeit-4.jpg',
            'assets/counterfeit-5.jpg',
            'assets/counterfeit-6.jpg',
            'assets/counterfeit-7.jpg',
            'assets/counterfeit-8.jpg'
        ]
    },
    'un-paso-mas': {
        title: 'Un Paso Mas',
        type: 'Short Film',
        year: '2024',
        duration: '10 min',
        video: null,
        credits: {
            'Director': 'Mark J. Sanchez',
            'Festival': 'Catalina Film Festival',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/un-paso-mas-main.jpg',
            'assets/un-paso-mas-1.jpg',
            'assets/un-paso-mas-2.jpg',
            'assets/un-paso-mas-3.jpg',
            'assets/un-paso-mas-4.jpg',
            'assets/un-paso-mas-5.jpg',
            'assets/un-paso-mas-6.jpg',
            'assets/un-paso-mas-7.jpg',
            'assets/un-paso-mas-8.jpg'
        ]
    },
    'i-am-a-piece-of-shit': {
        title: 'I Am A Piece of Shit',
        type: 'Short Film',
        year: '2024',
        duration: '8 min',
        video: null,
        credits: {
            'Director': 'Tristan St Germain',
            'Production': 'Independent',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/piece-of-shit-main.jpg',
            'assets/piece-of-shit-1.jpg',
            'assets/piece-of-shit-2.jpg',
            'assets/piece-of-shit-3.jpg',
            'assets/piece-of-shit-4.jpg',
            'assets/piece-of-shit-5.jpg',
            'assets/piece-of-shit-6.jpg',
            'assets/piece-of-shit-7.jpg',
            'assets/piece-of-shit-8.jpg'
        ]
    },
    'scratch-and-sniff': {
        title: 'Scratch & Sniff',
        type: 'Short Film',
        year: '2023',
        duration: '14 min',
        vimeoId: '908437591',
        credits: {
            'Director': 'Ben Grimes',
            'Festival': 'LA Shorts International',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/scratch-sniff-1.jpg',
            'assets/scratch-sniff-2.jpg',
            'assets/scratch-sniff-3.jpg',
            'assets/scratch-sniff-4.jpg',
            'assets/scratch-sniff-5.jpg',
            'assets/scratch-sniff-6.jpg',
            'assets/scratch-sniff-7.jpg',
            'assets/scratch-sniff-8.jpg'
        ]
    },
    'califoreclosed': {
        title: 'Califoreclosed',
        type: 'Short Film',
        year: '2023',
        duration: '18 min',
        vimeoId: '896702263',
        credits: {
            'Director': 'Aakash Tumuluri',
            'Network': 'PBS',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/califoreclosed-1.jpg',
            'assets/califoreclosed-2.jpg',
            'assets/califoreclosed-3.jpg',
            'assets/califoreclosed-4.jpg',
            'assets/califoreclosed-5.jpg',
            'assets/califoreclosed-6.jpg',
            'assets/califoreclosed-7.jpg',
            'assets/califoreclosed-8.jpg'
        ]
    },
    'the-day-we-met': {
        title: 'The Day We Met',
        type: 'Short Film',
        year: '2023',
        duration: '11 min',
        video: null,
        credits: {
            'Director': 'Stephanie Jones',
            'Production': 'Independent',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/day-we-met-main.jpg',
            'assets/day-we-met-1.jpg',
            'assets/day-we-met-2.jpg',
            'assets/day-we-met-3.jpg',
            'assets/day-we-met-4.jpg',
            'assets/day-we-met-5.jpg',
            'assets/day-we-met-6.jpg',
            'assets/day-we-met-7.jpg',
            'assets/day-we-met-8.jpg'
        ]
    },
    'inch-by-inch': {
        title: 'Inch by Inch',
        type: 'Short Film',
        year: '2023',
        duration: '9 min',
        video: null,
        credits: {
            'Director': 'Karolina Esqueda Rocha',
            'Production': 'Senorita Cinema',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/inch-by-inch-main.jpg',
            'assets/inch-by-inch-1.jpg',
            'assets/inch-by-inch-2.jpg',
            'assets/inch-by-inch-3.jpg',
            'assets/inch-by-inch-4.jpg',
            'assets/inch-by-inch-5.jpg',
            'assets/inch-by-inch-6.jpg',
            'assets/inch-by-inch-7.jpg',
            'assets/inch-by-inch-8.jpg'
        ]
    },
    'if-you-see-me': {
        title: 'If You See Me',
        type: 'Short Film',
        year: '2023',
        duration: '13 min',
        video: null,
        credits: {
            'Director': 'Kelsey McGee',
            'Production': 'Independent',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/if-you-see-me-main.jpg',
            'assets/if-you-see-me-1.jpg',
            'assets/if-you-see-me-2.jpg',
            'assets/if-you-see-me-3.jpg',
            'assets/if-you-see-me-4.jpg',
            'assets/if-you-see-me-5.jpg',
            'assets/if-you-see-me-6.jpg',
            'assets/if-you-see-me-7.jpg',
            'assets/if-you-see-me-8.jpg'
        ]
    },
    'bond-of-togetherness': {
        title: '#BondOfTogetherness',
        type: 'Commercial',
        year: '2024',
        duration: '1.5 min',
        vimeoId: '507503436',
        credits: {
            'Brand': 'UTI Mutual Fund',
            'Agency': 'Vertuals',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/uti-mutual-1.jpg',
            'assets/uti-mutual-2.jpg',
            'assets/uti-mutual-3.jpg',
            'assets/uti-mutual-4.jpg',
            'assets/uti-mutual-5.jpg',
            'assets/uti-mutual-6.jpg',
            'assets/uti-mutual-7.jpg',
            'assets/uti-mutual-8.jpg'
        ]
    },
    'fsw-lamba-challega': {
        title: 'FSW Lamba Challega',
        type: 'Commercial',
        year: '2024',
        duration: '2 min',
        vimeoId: '495715495',
        credits: {
            'Brand': 'Brand Factory',
            'Agency': 'Ideatelabs',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/lamba-challega-1.jpg',
            'assets/lamba-challega-2.jpg',
            'assets/lamba-challega-3.jpg',
            'assets/lamba-challega-4.jpg',
            'assets/lamba-challega-5.jpg',
            'assets/lamba-challega-6.jpg',
            'assets/lamba-challega-7.jpg',
            'assets/lamba-challega-8.jpg'
        ]
    },
    'utha-utha-sakalik': {
        title: 'Utha Utha Sakalik',
        type: 'Music Video',
        year: '2024',
        duration: '4 min',
        youtubeId: 'bb0QC0XWbIc',
        credits: {
            'Artist': 'Sumanta Das, Shardul',
            'Label': 'SareGaMa',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/sakalik-1.jpg',
            'assets/sakalik-2.jpg',
            'assets/sakalik-3.jpg',
            'assets/sakalik-4.jpg',
            'assets/sakalik-5.jpg',
            'assets/sakalik-6.jpg',
            'assets/sakalik-7.jpg',
            'assets/sakalik-8.jpg'
        ]
    },
    'mera-hai-dil': {
        title: 'Mera Hai Dil',
        type: 'Music Video',
        year: '2024',
        duration: '4 min',
        youtubeId: 'ekmvKSNT-AU',
        credits: {
            'Artist': 'SurFira',
            'Label': 'Kailasa Records',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/mera-hai-dil-1.jpg',
            'assets/mera-hai-dil-2.jpg',
            'assets/mera-hai-dil-3.jpg',
            'assets/mera-hai-dil-4.jpg',
            'assets/mera-hai-dil-5.jpg',
            'assets/mera-hai-dil-6.jpg',
            'assets/mera-hai-dil-7.jpg',
            'assets/mera-hai-dil-8.jpg'
        ]
    },
    'ishq-toh-nahi': {
        title: 'Ishq Toh Nahi',
        type: 'Music Video',
        year: '2024',
        duration: '4 min',
        youtubeId: 'sYXBrZ-w2ts',
        credits: {
            'Artist': 'Kailash Kher',
            'Label': 'Kailasa Records',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/ishq-toh-nahi-1.jpg',
            'assets/ishq-toh-nahi-2.jpg',
            'assets/ishq-toh-nahi-3.jpg',
            'assets/ishq-toh-nahi-4.jpg',
            'assets/ishq-toh-nahi-5.jpg',
            'assets/ishq-toh-nahi-6.jpg',
            'assets/ishq-toh-nahi-7.jpg',
            'assets/ishq-toh-nahi-8.jpg'
        ]
    },
    'mumbai-anthem': {
        title: 'Mumbai Anthem',
        type: 'Music Video',
        year: '2024',
        duration: '4 min',
        youtubeId: '-ZAeIuSuPkY',
        credits: {
            'Artist': 'Shadaab Hashmi',
            'Producer': 'Things2do',
            'Cinematographer': 'Harnish Ambaliya'
        },
        stills: [
            'assets/mumbai-anthem-1.jpg',
            'assets/mumbai-anthem-2.jpg',
            'assets/mumbai-anthem-3.jpg',
            'assets/mumbai-anthem-4.jpg',
            'assets/mumbai-anthem-5.jpg',
            'assets/mumbai-anthem-6.jpg',
            'assets/mumbai-anthem-7.jpg',
            'assets/mumbai-anthem-8.jpg'
        ]
    }
};

// Portfolio filtering with URL hash support
function initPortfolioFiltering() {
    const filterLinks = document.querySelectorAll('.nav-link[data-filter]');
    const filmStrips = document.querySelectorAll('.film-strip');
    
    if (filterLinks.length === 0 || filmStrips.length === 0) return;
    
    // Handle hash navigation from URL
    const hash = window.location.hash.substring(1);
    if (hash && ['feature', 'tv', 'short', 'commercial'].includes(hash)) {
        setTimeout(() => {
            const targetLink = document.querySelector(`[data-filter="${hash}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }, 100);
    }
    
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            filterLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            if (filter !== 'all') {
                window.history.pushState(null, null, `#${filter}`);
            } else {
                window.history.pushState(null, null, window.location.pathname);
            }
            
            filmStrips.forEach((strip, index) => {
                const category = strip.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    strip.style.display = 'block';
                    strip.style.opacity = '0';
                    strip.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        strip.style.opacity = '1';
                        strip.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    strip.style.opacity = '0';
                    strip.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        strip.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Film strip scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.film-strip').forEach(strip => {
        observer.observe(strip);
    });
}

// Film click handler - Uses URL parameters
function handleFilmClick(element) {
    const filmId = element.getAttribute('data-film');
    
    if (!filmId) {
        console.error('No film ID found');
        return;
    }

    // Navigate to film page with URL parameter
    window.location.href = `film.html?id=${encodeURIComponent(filmId)}`;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initPortfolioFiltering();
    initScrollAnimations();
    
    // Add click handlers to film strips
    const filmStrips = document.querySelectorAll('.film-strip');
    filmStrips.forEach(strip => {
        strip.style.cursor = 'pointer';
        
        strip.addEventListener('click', function() {
            handleFilmClick(this);
        });

        strip.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        strip.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Scroll-based navbar styling
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

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

// Export FILM_DATA for use in film.html
if (typeof window !== 'undefined') {
    window.FILM_DATA = FILM_DATA;
}
