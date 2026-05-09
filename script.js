// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Horizontal scroll with mouse wheel for rows
const rows = document.querySelectorAll('.row-posters');

rows.forEach(row => {
    row.addEventListener('wheel', (e) => {
        e.preventDefault();
        row.scrollLeft += e.deltaY;
    });
});

// Add click animation to posters
const posters = document.querySelectorAll('.poster');

posters.forEach(poster => {
    poster.addEventListener('click', () => {
        // You can add modal or video player functionality here
        const img = poster.querySelector('img');
        alert(`You clicked on: ${img.alt}`);
    });
});

// Button hover effects
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Search button functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const searchTerm = prompt('Search for movies or TV shows:');
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // You can implement actual search functionality here
    }
});

// Profile menu (simple implementation)
const profileImg = document.querySelector('.profile-img');
profileImg.addEventListener('click', () => {
    alert('Profile menu - You can add dropdown functionality here');
});

// Console log for development
console.log('Netflix Clone loaded successfully!');
console.log('Features:');
console.log('- Scrollable movie rows');
console.log('- Header background change on scroll');
console.log('- Hover effects on posters and buttons');
console.log('- Responsive design');
