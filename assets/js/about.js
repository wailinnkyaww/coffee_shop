document.addEventListener('DOMContentLoaded', () => {
    const animElements = document.querySelectorAll('[data-anim]');

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1
    };

    const animObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-animated');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animElements.forEach(el => animObserver.observe(el));

    const historySection = document.querySelector('.sec-history');
    if (historySection) {
        const historyObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -20% 0px" });

        historyObserver.observe(historySection);
    }
});
