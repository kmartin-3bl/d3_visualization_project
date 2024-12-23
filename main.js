
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", 800)
    .attr("height", 600);

svg.append("circle")
    .attr("cx", 400)
    .attr("cy", 300)
    .attr("r", 100)
    .attr("fill", "blue");
