/* =========================================================
   IKRAM TECH - PROFESSIONAL JAVASCRIPT
   Website: Ikram Tech
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. HEADER SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(".site-header") ||
        document.querySelector(".header");

    const handleHeaderScroll = () => {
        if (!header) return;

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    handleHeaderScroll();

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );


    /* =====================================================
       2. MOBILE MENU
       ===================================================== */

    const menuBtn =
        document.querySelector(".menu-toggle") ||
        document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                navLinks.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });


        /* Close menu after clicking a link */

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                document.body.classList.remove(
                    "menu-open"
                );

                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );
            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", event => {

            if (
                !navLinks.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navLinks.classList.remove("active");

                document.body.classList.remove(
                    "menu-open"
                );

                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    }


    /* =====================================================
       3. BACK TO TOP BUTTON
       ===================================================== */

    const topBtn =
        document.querySelector(".top-btn") ||
        document.getElementById("topBtn");

    if (topBtn) {

        const toggleTopButton = () => {

            if (window.scrollY > 500) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        };

        toggleTopButton();

        window.addEventListener(
            "scroll",
            toggleTopButton,
            { passive: true }
        );


        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       4. SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#" ||
                        targetId.length < 2
                    ) {
                        return;
                    }

                    let target;

                    try {
                        target =
                            document.querySelector(
                                targetId
                            );
                    } catch (error) {
                        return;
                    }

                    if (!target) return;

                    event.preventDefault();

                    const headerHeight =
                        header?.offsetHeight || 80;

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top
                        + window.scrollY
                        - headerHeight
                        - 15;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       5. FAQ ACCORDION
       ===================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        if (!question || !answer) return;


        question.setAttribute(
            "aria-expanded",
            "false"
        );


        question.addEventListener(
            "click",
            () => {

                const isOpen =
                    item.classList.contains("active");


                /* Close all other FAQ items */

                faqItems.forEach(otherItem => {

                    if (otherItem !== item) {

                        otherItem.classList.remove(
                            "active"
                        );

                        const otherQuestion =
                            otherItem.querySelector(
                                ".faq-question"
                            );

                        if (otherQuestion) {

                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }

                });


                /* Toggle selected FAQ */

                item.classList.toggle(
                    "active",
                    !isOpen
                );

                question.setAttribute(
                    "aria-expanded",
                    !isOpen
                        ? "true"
                        : "false"
                );

            }
        );

    });


    /* =====================================================
       6. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".topic-card, " +
            ".service-card, " +
            ".portfolio-card, " +
            ".project-card, " +
            ".learning-card, " +
            ".step-card, " +
            ".stat, " +
            ".stat-card, " +
            ".featured-article, " +
            ".featured-card, " +
            ".about-content, " +
            ".skills-box"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       7. SKILL BAR ANIMATION
       ===================================================== */

    const skillBars =
        document.querySelectorAll(
            ".skill-bar span"
        );


    if ("IntersectionObserver" in window) {

        const skillObserver =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const bar =
                                entry.target;

                            const width =
                                bar.getAttribute(
                                    "data-width"
                                );


                            if (width) {

                                bar.style.width =
                                    width;

                            }


                            observerInstance.unobserve(
                                bar
                            );

                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );


        skillBars.forEach(bar => {

            const currentWidth =
                bar.style.width;

            if (
                currentWidth &&
                !bar.hasAttribute(
                    "data-width"
                )
            ) {

                bar.setAttribute(
                    "data-width",
                    currentWidth
                );

            }


            const dataWidth =
                bar.getAttribute(
                    "data-width"
                );

            if (dataWidth) {

                bar.style.width = "0";

                skillObserver.observe(bar);

            }

        });

    }


    /* =====================================================
       8. CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       9. EXTERNAL LINKS
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="http"]'
        )
        .forEach(link => {

            const currentHost =
                window.location.hostname;

            try {

                const linkUrl =
                    new URL(link.href);

                if (
                    linkUrl.hostname !==
                        currentHost &&
                    !link.hasAttribute(
                        "target"
                    )
                ) {

                    link.setAttribute(
                        "target",
                        "_blank"
                    );

                    link.setAttribute(
                        "rel",
                        "noopener noreferrer"
                    );

                }

            } catch (error) {

                /* Ignore invalid URLs */

            }

        });


    /* =====================================================
       10. WHATSAPP BUTTON TRACKING
       ===================================================== */

    document
        .querySelectorAll(
            'a[href*="wa.me"], ' +
            'a[href*="whatsapp"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    console.log(
                        "Ikram Tech WhatsApp button clicked."
                    );

                }
            );

        });


    /* =====================================================
       11. BUTTON RIPPLE EFFECT
       ===================================================== */

    document
        .querySelectorAll(".btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function (event) {

                    const ripple =
                        document.createElement(
                            "span"
                        );

                    ripple.classList.add(
                        "ripple"
                    );


                    const rect =
                        this.getBoundingClientRect();


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.width =
                        `${size}px`;

                    ripple.style.height =
                        `${size}px`;

                    ripple.style.left =
                        `${
                            event.clientX -
                            rect.left -
                            size / 2
                        }px`;

                    ripple.style.top =
                        `${
                            event.clientY -
                            rect.top -
                            size / 2
                        }px`;


                    this.appendChild(
                        ripple
                    );


                    setTimeout(() => {

                        ripple.remove();

                    }, 600);

                }
            );

        });


    /* =====================================================
       12. DISABLE IMAGE DRAGGING
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.setAttribute(
                "draggable",
                "false"
            );

        });


    /* =====================================================
       13. IMAGE LAZY LOADING
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            if (
                !image.hasAttribute(
                    "loading"
                )
            ) {

                image.setAttribute(
                    "loading",
                    "lazy"
                );

            }

        });


    /* =====================================================
       14. KEYBOARD ACCESSIBILITY
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (
                    navLinks &&
                    menuBtn
                ) {

                    navLinks.classList.remove(
                        "active"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                    menuBtn.classList.remove(
                        "active"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuBtn.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                }

            }

        }
    );


    /* =====================================================
       15. PREVENT DOUBLE FORM SUBMISSION
       ===================================================== */

    document
        .querySelectorAll("form")
        .forEach(form => {

            form.addEventListener(
                "submit",
                event => {

                    const submitButton =
                        form.querySelector(
                            'button[type="submit"], ' +
                            'input[type="submit"]'
                        );

                    if (!submitButton) return;


                    if (
                        submitButton.dataset
                            .submitting === "true"
                    ) {

                        event.preventDefault();

                        return;

                    }


                    submitButton.dataset
                        .submitting = "true";


                    setTimeout(() => {

                        submitButton.dataset
                            .submitting = "false";

                    }, 3000);

                }
            );

        });


    /* =====================================================
       16. CONSOLE BRAND MESSAGE
       ===================================================== */

    console.log(
        "%cIkram Tech",
        "font-size:22px;font-weight:bold;"
    );

    console.log(
        "Professional digital learning & technology website."
    );


    /* =====================================================
       17. PAGE READY
       ===================================================== */

    document.body.classList.add(
        "js-ready"
    );

});