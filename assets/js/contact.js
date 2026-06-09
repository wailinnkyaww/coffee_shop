document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin framework
  gsap.registerPlugin(ScrollTrigger);

  // Header Component Immediate Drop Entry
  const headerTl = gsap.timeline();

  headerTl.from('.header', {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Dynamic Scroll Tracking Engine for Main Content Sections
  const contactSections = ['sec-contact', 'sec-community-banner', 'sec-message', 'sec-stay-connected'];

  contactSections.forEach((secClass) => {
    const targetSection = document.querySelector(`.${secClass}`);
    if (!targetSection) return;

    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: targetSection,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Queries standard structural elements assigned with data-anim targets inside the active area trace
    sectionTl.from(targetSection.querySelectorAll('[data-anim="fade-up"]'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Automatically maintains a clean 0.2s entry cascade
      ease: 'power2.out'
    });
  });

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
