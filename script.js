// ========== Toggle Menu ==========
const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// ========== Animate Skill Bars on Scroll ==========
const skillsSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
});
