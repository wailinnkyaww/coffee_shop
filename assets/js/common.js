document.addEventListener('DOMContentLoaded', () => {
    async function loadComponents() {
        try {
            const headerRes = await fetch('components/header.html');
            const footerRes = await fetch('components/footer.html');

            if (!headerRes.ok) {
                throw new Error('Failed to load header component');
            }
            if (!footerRes.ok) {
                throw new Error('Failed to load footer component');
            }

            const headerHtml = await headerRes.text();
            const footerHtml = await footerRes.text();

            document.getElementById('header').innerHTML = headerHtml;
            document.getElementById('footer').innerHTML = footerHtml;

            setupActiveLink();
            setupHamburger();
        } catch (error) {
            console.error('Error loading page components:', error);
        }
    }

    function setupActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-lists a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const pageName = href.substring(href.lastIndexOf('/') + 1);
                const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

                if (currentPage === pageName ||
                    ((currentPage === '' || currentPage === 'index.html') && pageName === 'index.html')) {
                    link.classList.add('active');
                }
            }
        });
    }

    function setupHamburger() {
        const hamburger = document.querySelector('.hamburger');
        const navLists = document.querySelector('.nav-lists');

        if (hamburger && navLists) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLists.classList.toggle('active');
            });
        }
    }

    loadComponents();
});

