$(document).ready(function(){
    Materialize.toast('Welcome!', 3000);
    $('.parallax').parallax();

    /*
     *  D3
     */

    /*var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

    var data = [4, 8, 15, 16, 23, 42];
    var element = d3.select("#chart");

    element.style("color", "black")
        .style("background-color", "white");

    var bar = element.selectAll("div");

    var barEnter =
        bar.data(data).enter().append("div")
        .style("width", function(d) {
            return (x(d) + "px");
        });

    barEnter.text(function(d) {
        return d;
    });*/

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
