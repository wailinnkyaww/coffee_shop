document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin framework
  gsap.registerPlugin(ScrollTrigger)

  // Header / Navigation Entry Animation
  gsap.from('.header', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

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
  })

  document.querySelectorAll('.special-section .special-card').forEach(card => {
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    })

    // Check if the current card contains the reverse utility modifier
    const isReverse = card.classList.contains('card-reverse')
    const travelDistance = isReverse ? 70 : -70

    cardTl
      .from(card.querySelector('.special-card img'), {
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
      .from(
        card.querySelector('.special-desc'),
        {
          y: travelDistance,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out'
        },
        '-=0.6'
      )
  })

  // Menu Tabs Section Entry Fade-Up Timeline
  const menuTabsTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.menu-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  menuTabsTl
    .from(
      '.menu-section .second-special-menu, .menu-section .menu-main-heading',
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }
    )
    .from(
      '.menu-section .menu-tabs .tab-btn',
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .from(
      '.menu-section .menu-image-wrapper img',
      {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
      },
      '-=0.2'
    )
    .from(
      '.menu-section .menu-list .menu-item[data-anim="fade-up"]',
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
      },
      '-=0.6'
    )
    .from(
      '.menu-section .center-btn-wrapper',
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )

  // BellaCrema Banner Section Entry Fade-Up
  const bannerTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.promo-section',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })

  bannerTl
    .from('.promo-section .promo-img-holder img', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .from(
      '.promo-section .promo-content-holder > *',
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      },
      '-=0.6'
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
