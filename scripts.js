$(function () {
    $.scrollify({
        section: ".scroll-section",
        easing: "easeOutExpo",
        offset: -64,
        before: (i, sec) => {
            let root = document.querySelector(':root');
            root.style.setProperty('--scroll-bg-now', `url("./assets/bg${i}.jpeg")`);
        },
        afterRender: () => {
            // $(".nav-ctl").on('click', (e) => {
            //     // console.log($(e.target).attr('srl-to'));
            //     $.scrollify.move();
            // })


            var pagination = "<ul class=\"right hide-on-med-and-down\">";
            var activeClass = "";
            $(".scroll-section").each(function (i) {
                activeClass = "";
                if (i === $.scrollify.currentIndex()) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</a></li>";
            });

            pagination += "</ul>";

            $(".nav-link-wrapper").append(pagination);


            // let newNode = makeTemplate(pagination)
            // document.querySelector(".nav-link-wrapper").appendChild(newNode);
            // console.log(document.querySelector(".nav-link-wrapper"));
            // console.log(newNode);
            /*
      
            Tip: The two click events below are the same:
      
            $(".pagination a").on("click",function() {
              $.scrollify.move($(this).attr("href"));
            });
      
            */
            $(".nav-link-wrapper a").on("click", $.scrollify.move);
        }
    });
});



// document.querySelectorAll('.nav-ctl').forEach((elem) => {
//     elem.addEventListener('click', () => {
//         console.log(elem);
//     })
// });

document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
});

var makeTemplate = (html) => {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}