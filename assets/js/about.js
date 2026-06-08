document.addEventListener('DOMContentLoaded', () => {
    // Pa  // ၁။ animElements ကို အရင်ဖမ်းပေးရပါမယ် (ကျန်ခဲ့တာ ဖြည့်ထားပေးတယ်)
    const animElements = document.querySelectorAll('[data-anim]');

    // ၂။ စာလုံးပေါင်း ပြင်ထားပါတယ် (observerOptions)
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1
    };

    const animObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ၃။ .ad ကို .add ဟု ပြင်ထားပါတယ်
                entry.target.classList.add('is-animated');
                observer.unobserve(entry.target); // တစ်ခါပဲ Run မယ်
            }
        });
    }, observerOptions);

    animElements.forEach(el => animObserver.observe(el));

    // --- 2. SPECIAL: HISTORY SECTION TIMELINE LINE ANIMATION ---
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
