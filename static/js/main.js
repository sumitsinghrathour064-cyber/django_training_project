/* =========================================================
   DJANGOAPP HOME JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter");


    counters.forEach(function (counter) {

        const target =
            parseInt(
                counter.getAttribute("data-target")
            );


        let current = 0;


        const duration = 900;

        const steps = 30;

        const increment =
            target / steps;


        const timer =
            setInterval(function () {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);
                }


                counter.textContent =
                    Math.floor(current);

            }, duration / steps);

    });



    /* =====================================================
       ACCESS CARD MOUSE GLOW
    ===================================================== */

    const cards =
        document.querySelectorAll(".access-card");


    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                card.style.setProperty(
                    "--mouse-x",
                    x + "px"
                );


                card.style.setProperty(
                    "--mouse-y",
                    y + "px"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.removeProperty(
                    "--mouse-x"
                );

                card.style.removeProperty(
                    "--mouse-y"
                );

            }
        );

    });



    /* =====================================================
       DASHBOARD PARALLAX
    ===================================================== */

    const dashboard =
        document.querySelector(".dashboard-card");


    const heroRight =
        document.querySelector(".hero-right");


    if (dashboard && heroRight) {

        heroRight.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth <= 900) {
                    return;
                }


                const rect =
                    heroRight.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (x - centerX) / 35;


                const rotateX =
                    (centerY - y) / 35;


                dashboard.style.transform =
                    `
                    perspective(1000px)
                    rotateY(${rotateY}deg)
                    rotateX(${rotateX}deg)
                    translateY(-5px)
                    `;

            }
        );


        heroRight.addEventListener(
            "mouseleave",
            function () {

                dashboard.style.transform =
                    `
                    perspective(1000px)
                    rotateY(-7deg)
                    rotateX(3deg)
                    `;

            }
        );

    }



    /* =====================================================
       SMOOTH CARD REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".stat-card, .access-card, .feature-card"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show-card"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(20px)";


            element.style.transition =
                "opacity .6s ease, transform .6s ease";


            observer.observe(element);

        }
    );



    /* =====================================================
       ADD REVEAL CLASS
    ===================================================== */

    const revealStyle =
        document.createElement("style");


    revealStyle.innerHTML = `

        .show-card {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;


    document.head.appendChild(
        revealStyle
    );

});

/* =========================================================
   DJANGOAPP HOME JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter");


    counters.forEach(function (counter) {

        const target =
            parseInt(
                counter.getAttribute("data-target")
            );


        let current = 0;


        const duration = 900;

        const steps = 30;

        const increment =
            target / steps;


        const timer =
            setInterval(function () {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);
                }


                counter.textContent =
                    Math.floor(current);

            }, duration / steps);

    });



    /* =====================================================
       ACCESS CARD MOUSE GLOW
    ===================================================== */

    const cards =
        document.querySelectorAll(".access-card");


    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                card.style.setProperty(
                    "--mouse-x",
                    x + "px"
                );


                card.style.setProperty(
                    "--mouse-y",
                    y + "px"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.removeProperty(
                    "--mouse-x"
                );

                card.style.removeProperty(
                    "--mouse-y"
                );

            }
        );

    });



    /* =====================================================
       DASHBOARD PARALLAX
    ===================================================== */

    const dashboard =
        document.querySelector(".dashboard-card");


    const heroRight =
        document.querySelector(".hero-right");


    if (dashboard && heroRight) {

        heroRight.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth <= 900) {
                    return;
                }


                const rect =
                    heroRight.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (x - centerX) / 35;


                const rotateX =
                    (centerY - y) / 35;


                dashboard.style.transform =
                    `
                    perspective(1000px)
                    rotateY(${rotateY}deg)
                    rotateX(${rotateX}deg)
                    translateY(-5px)
                    `;

            }
        );


        heroRight.addEventListener(
            "mouseleave",
            function () {

                dashboard.style.transform =
                    `
                    perspective(1000px)
                    rotateY(-7deg)
                    rotateX(3deg)
                    `;

            }
        );

    }



    /* =====================================================
       SMOOTH CARD REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".stat-card, .access-card, .feature-card"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show-card"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(20px)";


            element.style.transition =
                "opacity .6s ease, transform .6s ease";


            observer.observe(element);

        }
    );



    /* =====================================================
       ADD REVEAL CLASS
    ===================================================== */

    const revealStyle =
        document.createElement("style");


    revealStyle.innerHTML = `

        .show-card {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;


    document.head.appendChild(
        revealStyle
    );

});