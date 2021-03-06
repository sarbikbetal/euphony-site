var titles = ["", "Our Events", "Our Music Society", "Crew Members", ""];

$(function () {
    $.scrollify({
        section: ".scroll-section",
        scrollSpeed: 800,
        interstitialSection: "footer",
        easing: "easeOutExpo",
        offset: -64,
        before: (i, sec) => {
            // Scale out the FAB
            $(".scale-transition").removeClass("scale-in");

            // Footer Section
            if (i == 4)
                return;

            // Change Background Image
            let root = document.querySelector(':root');
            root.style.setProperty('--scroll-bg-now', `url("./assets/bg${i}.jpeg")`);

            // Change active class of navbar
            var ref = sec[i].attr("data-section-name");
            $(".nav-link-wrapper .active").removeClass("active");
            $(".nav-link-wrapper").find("a[href=\"#" + ref + "\"]").parent().addClass("active");

            $(".sidenav li.active").removeClass("active");
            $(".sidenav").find("a[href=\"#" + ref + "\"]").parent().addClass("active");
            // Change the headline text
            document.querySelector(".headline").style.setProperty('opacity', 0);
        },
        after: (i) => {

            // Change the headline and set opacity to 1
            document.querySelector(".headline").innerHTML = titles[i];
            document.querySelector('.headline').style.setProperty('opacity', 1);

            // Scale up the FAB
            if (i != 0 && i != 4)
                $(".scale-transition").addClass("scale-in");
        },
        afterRender: () => {
            // Auto-Populate navbar and nav-drawer 
            var navPagination = "<ul class=\"right hide-on-med-and-down\">";
            var drawerPagination = "";
            var activeClass = "";
            $(".scroll-section").each(function (i) {
                activeClass = "";
                if (i === $.scrollify.currentIndex()) {
                    activeClass = "active";
                }
                navPagination += "<li class=\"" + activeClass + "\"><a href=\"#" + $(this).attr("data-section-name") + "\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</a></li>";
                drawerPagination += "<li class=\"" + activeClass + "\"><a class=\"sidenav-close\" href=\"#" + $(this).attr("data-section-name") + "\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</a></li>";
            });

            navPagination += "</ul>";

            $(".nav-link-wrapper").append(navPagination);
            $(".nav-link-wrapper a").on("click", $.scrollify.move);

            $("#mobile-demo").append(drawerPagination);
            $("#mobile-demo a").on("click", $.scrollify.move);

            $(".ghost-btn").on("click", () => {
                $.scrollify.next();
            });
        }
    });
});

// Image Preloader


var loadedimages = [];
for (var x = 0; x < 4; x++) {
    loadedimages[x] = new Image();
    loadedimages[x].src = `./assets/bg${x}.jpeg`;
}


// Initialize Materialize elements
document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
});
