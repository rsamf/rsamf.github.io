$(document).ready(function(){
    Materialize.toast('Welcome!', 3000);
    $('.parallax').parallax();
    $("#menu-button").sideNav({
        closeOnClick: true,
        draggable: true
    });
    $(".side-nav a").on("click", function(evt){
        $("#menu-button").sideNav('hide');
    });
    $('.about.collapsible').collapsible('open', 0);
    $('.about.collapsible').collapsible('open', 1);
    $('.about.collapsible').collapsible('open', 2);
    $('.about.collapsible').collapsible('open', 3);

    //$('.timeline.collapsible').collapsible('open', 0);
    //$('.timeline.collapsible').collapsible('open', 1);
    //$('.timeline.collapsible').collapsible('open', 2);
    $('.timeline.collapsible').collapsible('open', 3);


    const offset = 50;
    var options = [
        {
            selector : '#welcome',
            offset: offset,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#optical.animated.pre-animated',
            offset: offset,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#mechanical.animated.pre-animated',
            offset: offset,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#application.animated.pre-animated',
            offset: offset,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        }
    ];

    Materialize.scrollFire(options);

});
