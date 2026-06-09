document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin framework
  gsap.registerPlugin(ScrollTrigger);

  // Header / Navigation Entry Animation
  gsap.from('.header', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });


  // Today Special Section Animations
  //for title
  gsap.from('.special-section .special-menu', {
    scrollTrigger: {
      trigger: '.special-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // for special card
  document.querySelectorAll('.special-section .special-card').forEach((card) => {
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // Check if the current card contains the reverse utility modifier
    const isReverse = card.classList.contains('card-reverse');

    // Normal elements slide down (-70), reversed elements slide up (70)
    const travelDistance = isReverse ? 70 : -70;

    cardTl.from(card.querySelector('.special-card img'), {
      y: travelDistance,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
      .from(card.querySelector('.special-title'), {
        y: travelDistance,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      })
      .from(card.querySelector('.special-desc'), {
        y: travelDistance,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.6'); // Staggers in cleanly right as the image begins to clear its path
  });



  // Menu Tabs Section Entry Fade-Up Timeline
  const menuTabsTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-menu',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  menuTabsTl.from('.sec-menu .menu-sub-ttl, .sec-menu .sec-ttl', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
    .from('.sec-menu .menu-tabs .tab-btn', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.sec-menu .menu-showcase img', {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.2')
    // Targets each menu element with data-anim="fade-up" cascading sequentially with a 0.2s delay step
    .from('.sec-menu .menu-list .menu-item[data-anim="fade-up"]', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.6') // Starts animating smoothly as the showcase picture settles into place
    .from('.sec-menu .menu-action', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');


  // BellaCrema Banner Section Entry Fade-Up
  const bannerTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-banner',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });

  bannerTl.from('.sec-banner .banner-media img', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
    .from('.sec-banner .banner-content > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.6');


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
  });
});

