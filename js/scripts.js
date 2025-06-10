document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const canvas = document.getElementById('canvas');

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    // Update toggle button appearance
    function updateThemeButton() {
        themeToggle.classList.remove('btn-light', 'btn-dark', 'text-dark', 'border');

        if (body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-moon me-1"></i>Dark';
            themeToggle.classList.add('btn-dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun me-1"></i>Light';
            themeToggle.classList.add('btn-light', 'text-dark', 'border');
        }
    }

    // Toggle theme and store preference
    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeButton();
    });

    updateThemeButton(); // Initial sync

    // New spotlight ripple effect on canvas
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        document.addEventListener("touchmove", (e) => {
            if (e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
            }
        });

        function animate() {
            requestAnimationFrame(animate);

            targetX += (mouseX - targetX) * 0.1;
            targetY += (mouseY - targetY) * 0.1;

            const isDark = !document.body.classList.contains("light-theme");
            const color = isDark ? "#ffffff" : "#000000";

            ctx.fillStyle = isDark ? "rgba(18, 18, 18, 0.08)" : "rgba(255, 255, 255, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(targetX, targetY, 30, 0, Math.PI * 2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        animate();
    }

    // AOS animation initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }
});

document.getElementById("current-year").textContent = new Date().getFullYear();
