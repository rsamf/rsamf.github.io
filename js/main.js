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

    var options = [
        {
            selector : '#about-animated.animated.pre-animated',
            offset: 150,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#video-animated.animated.pre-animated',
            offset: 150,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#gallery1-animated.animated.pre-animated',
            offset: 150,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#gallery2-animated.animated.pre-animated',
            offset: 150,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        },
        {
            selector : '#chart-animated.animated.pre-animated',
            offset: 150,
            callback : function(el) {
                $(el).removeClass("pre-animated");
                $(el).addClass("fadeInUp");
                console.log("HELLO");
            }
        }
    ];

    Materialize.scrollFire(options);

    /*
     *  D3
     */


    var data = [4, 8, 15, 16, 23, 42];

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

    d3.select("#chart")
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
            return x(d) + "px";
        })
        .text(function(d) {
            return d;
        });
});
