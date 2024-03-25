document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = 0;

    setTimeout(() => {
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.1;
            header.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeIn);
        }, 100);
    }, 500);
});
