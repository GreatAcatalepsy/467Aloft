var svg = d3.select('svg');
var originX = 300;
var originY = 300;
var c0Radius = 20;
var c1Radius = 60;
var c2Radius = 100;
var c3Radius = 140;
var c4Radius = 180;
var c5Radius = 220


var group = svg.append("g");


var c0 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: c0Radius,
    fill: "none",
    stroke: "#1F6BCE"
});

var c1 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: c1Radius,
    fill: "none",
    stroke: "#0ABFBC"
});

var c2 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: c2Radius,
    fill: "none",
    stroke: "#469CA0"
});

var c3 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: c3Radius,
    fill: "none",
    stroke: "#837A84"
});

var c4 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: c4Radius,
    fill: "none",
    stroke: "#BF5768"
});

var c5 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: c5Radius,
    fill: "none",
    stroke: "#FC354C"
});

var pointOnc0 = svg.append("circle").attr({
    cx: originX,
    cy: originY,
    r: 20,
    fill: "#00D0FF"
});

pointOnc0.transition().delay(500).duration(500).style("opacity", 1);

var chairOriginX1 = originX + ((60) * Math.sin(0));
var chairOriginY1 = originY - ((60) * Math.cos(0));
var chairOriginX2 = originX + ((100) * Math.sin(0));
var chairOriginY2 = originY - ((100) * Math.cos(0));
var chairOriginX3 = originX + ((140) * Math.sin(0));
var chairOriginY3 = originY - ((140) * Math.cos(0));
var chairOriginX4 = originX + ((180) * Math.sin(0));
var chairOriginY4 = originY - ((180) * Math.cos(0));
var chairOriginX5 = originX + ((220) * Math.sin(0));
var chairOriginY5 = originY - ((220) * Math.cos(0));

var pointOnc1 = svg.append("circle").attr({
    cx: chairOriginX1,
    cy: chairOriginY1,
    r: 15,
    fill: "#469CA0"
});

var pointOnc2 = svg.append("circle").attr({
    cx: chairOriginX2,
    cy: chairOriginY2,
    r: 15,
    fill: "#469CA0"
});

var pointOnc3 = svg.append("circle").attr({
    cx: chairOriginX3,
    cy: chairOriginY3,
    r: 15,
    fill: "#837A84"
});

var pointOnc4 = svg.append("circle").attr({
    cx: chairOriginX4,
    cy: chairOriginY4,
    r: 15,
    fill: "#BF5768"
});

var pointOnc5 = svg.append("circle").attr({
    cx: chairOriginX5,
    cy: chairOriginY5,
    r: 15,
    fill: "#FC354C"
});




