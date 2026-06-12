document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger plugin framework
    gsap.registerPlugin(ScrollTrigger)

    // Header / Navigation Master Entry Timeline
    const headerTl = gsap.timeline()

    headerTl.from('.header', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    })

    const chefTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-chef',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    })

    chefTl
        .from('.sec-chef [data-anim="fade-up"]:not(.chef-card)', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        })
        .from(
            '.sec-chef .chef-card[data-anim="fade-up"]',
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            },
            '-=0.2'
        )

    const historyTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-history',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    })

    historyTl
        .from('.sec-history .sec-ttl[data-anim="fade-up"]', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        })

        .from(
            '.sec-history .history-timeline[data-anim="fade-up"]',
            {
                y: 50,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out'
            },
            '-=0.3'
        )

        .from(
            '.sec-history .timeline-row',
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power2.out'
            },
            '-=0.4'
        )

    // Global Site Footer Component Entry Fade-Up
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    })
})
