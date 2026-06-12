document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper for Ingredients Carousel
  const ingredientsSwiper = new Swiper('.sec-ingredients .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.sec-ingredients .swiper-button-next',
      prevEl: '.sec-ingredients .swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  })

  // Register GSAP ScrollTrigger plugin framework
  gsap.registerPlugin(ScrollTrigger)

  // Hero & Header Entry Sequence Timeline
  const heroTl = gsap.timeline()

  heroTl
    .from('.header', {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from(
      '.sec-hero .hero-content > *',
      {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      },
      '-=0.2'
    )
    .from(
      '.hero-img-wrap',
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      },
      '-=0.5'
    )
  // Categories Section Animation Sequence
  const categoriesTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-categories',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  // Elements above the grid items fade up in sequence based on their data-delay
  categoriesTl
    .from('.sec-categories [data-anim="fade-up"]:not(.categories-card)', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    })
    .from(
      '.sec-categories .categories-card[data-anim="fade-up"]',
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      },
      '-=0.2'
    )

  // Menu Component Entry Sequence Animations
  const menuTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-menu',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  // Elements above row layout tracks block fade up sequentially
  menuTl.from(
    '.sec-menu > .sec-wrap > [data-anim="fade-up"]:not(.menu-block):not(.menu-action)',
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }
  )

  // Separate rows timeline triggered when each specific menu card enters the viewpoint bounds
  document.querySelectorAll('.sec-menu .menu-block').forEach(block => {
    const blockTl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    // The wrapper image fades up first based on its data-delay attribute
    blockTl
      .from(block.querySelector('.menu-img-frame[data-anim="fade-up"]'), {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
      })
      // The content column fades up next, overlapping with a smooth sequential 0.2s stagger difference
      .from(
        block.querySelector('.menu-list-wrap[data-anim="fade-up"]'),
        {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out'
        },
        '-=0.7'
      )
  })
  // See More button trigger fade track layout handler
  gsap.from('.sec-menu .menu-action[data-anim="fade-up"]', {
    scrollTrigger: {
      trigger: '.sec-menu .menu-action',
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out'
  })

  // Ribbon Split Section Entry & Infinite Graphics Rotation
  gsap.from('.sec-ads', {
    scrollTrigger: {
      trigger: '.sec-ads',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  // Infinite rotational transformation isolated from structural scroll-triggers
  gsap.to('.banner-cup img ', {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: 'none'
  })

  // Ingredients Carousel Section Entry Fade-Up
  gsap.from('.sec-ingredients', {
    scrollTrigger: {
      trigger: '.sec-ingredients',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out'
  })

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
