const basePath = location.hostname === "hajarzain222.github.io" ? "/Bakery-Website/" : "/";

fetch(`${basePath}components/header.html`)
    .then((res) => res.text())
    .then((data) => {
        document.querySelector("header").innerHTML = data;
        initHeaderFunctions();
    });

fetch(`${basePath}components/footer.html`)
    .then((res) => res.text())
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    });

function initHeaderFunctions() {
    const header = document.getElementById("mainHeader");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelectorAll(".main-link");
    const sections = document.querySelectorAll("section");
    const isHomePage = window.location.pathname.includes("index.html");
    const currentPage = window.location.pathname.split("/").pop();

    // Add homepage class if on homepage
    header.classList.toggle("homepage", isHomePage);

    // Handle scroll class
    const handleScroll = () => {
        header.classList.toggle("scrolled", window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Highlight active page link
    navLinks.forEach(link => {
        const hrefPage = link.getAttribute("href").split("/").pop();
        const isBlogLink = hrefPage === "blog.html" && currentPage.includes("blog");
        const isExactMatch = hrefPage === currentPage;

        if (isBlogLink || isExactMatch) {
            link.classList.add("active");
        }
    });

    // Highlight section on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(entry.target.id)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    // Dropdown logic for small screens

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const mainLink = dropdown.querySelector(".main-link");
        const submenu = dropdown.querySelector(".dropdown-menu");

        mainLink.addEventListener("click", (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault(); 

                const isOpen = dropdown.classList.toggle("open");
                submenu.classList.toggle("show", isOpen);

                if (isOpen) {
                    document.querySelectorAll(".dropdown").forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove("open");
                            const otherMenu = other.querySelector(".dropdown-menu");
                            if (otherMenu) otherMenu.classList.remove("show");
                        }
                    });
                }
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
            document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("open"));
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });
}









