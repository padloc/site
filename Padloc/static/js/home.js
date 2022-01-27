window.addEventListener("load", function() {
    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("animation-pause");
                }
            }
        },
        { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach(section => observer.observe(section));
});
