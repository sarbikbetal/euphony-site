$(function () {
    $.scrollify({
        section: ".scroll-sections",
        easing: "easeOutExpo",
        offset: -64,
        before: (i, sec) => {
            let root = document.querySelector(':root');
            root.style.setProperty('--scroll-bg-now', `url("./assets/bg${i}.jpeg")`);
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});

    var sections = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(sections, {});
});

