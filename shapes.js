
var tabulate = function (data) {
			var table = d3.select('#table1');

			console.log(data.columns)

    // headers
table.append("thead")
     .append("tr")
     .selectAll("th")
     .data(data.columns)
     .enter().append("th")
     .text(function(d) { return d;});


table.append("tbody")
     .selectAll('tr')
	 .data(data)
	 .enter()
	 .append('tr')
	 .selectAll('td')
	 .data(function(d) { return [[d.Country_Name],[d.Rural_Population]]; })
	 .enter()
	 .append('td')
	 .text(function(d) { return d; });   

  return ;
}

var barchart = function(data){




var color = d3.scaleOrdinal(d3.schemeCategory10);	
var barc = d3.select('#bar')
	.selectAll('rect')
	.data(data)
	.enter();
    barc.append('rect')
	.attr('x', function (d, i) { return ([(i+1.5) * 45]); })
	.attr('y', function (d) { return 560 - (5.5*[d.Rural_Population]); })
	.attr('width', function (d) { return [30]; })
	.attr('height', function (d) { return (5.5*[d.Rural_Population]); })
	.attr("fill", d=>color(d.Rural_Population));
	


barc.selectAll('text')
	.data(data)
	.enter()
	.append('text')
	.attr('x', function (d, i) { return ([(i+1.5) * 45]); })
	.attr('y', function (d) { return 550 - (5.5*[d.Rural_Population]); })
	.attr('font-size', '14px')
	.attr('fill', 'black')
	.text(function (d) { return d.Country_Name; })		




var width = 900, height = 1100;

var temp = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var svg = d3.select("#bar")

var xscale = d3.scaleLinear()
    .domain([0, d3.max(temp)])
    .range([0, width ]);

var yscale = d3.scaleLinear()
        .domain([0, d3.max(temp)])
        .range([height/2, 0]);

var x_axis = d3.axisBottom()
        .scale(xscale);

var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

var xAxisTranslate = height/2 + 10;

    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)
	

return ;
}



var scatterchart = function(data){
var color = d3.scaleOrdinal(d3.schemeCategory10);	
var scatterc = d3.select('#scatter')
	scatterc.selectAll('rect')
	.data(data)
	.enter()
	.append('circle')
	.attr('cx', function (d,i) { return ([(i+2) * 45]) ;})
	.attr('cy', function (d) { return 550 - (5.5*[d.Rural_Population]);})
	.attr('r', function (d) { return 5; })
	.attr("fill", d=>color(d.Rural_Population));



 scatterc.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.attr('x', function (d,i) { return ([(i+2) * 45]);})
		.attr('y', function (d,i) { return 535 - (5.5*[d.Rural_Population]); })
		.attr('fill', 'black')
		.attr('font-size', '12px')
		.attr('text-anchor', 'middle')
		.attr('alignment-baseline', 'middle')
		.text(function (d) { return d.Country_Name; });	


var width = 900, height = 1100;

var temp = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var svg = d3.select("#scatter")

var xscale = d3.scaleLinear()
    .domain([0, d3.max(temp)])
    .range([0, width ]);

var yscale = d3.scaleLinear()
        .domain([0, d3.max(temp)])
        .range([height/2, 0]);

var x_axis = d3.axisBottom()
        .scale(xscale);

var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

var xAxisTranslate = height/2 + 10;

    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)

	return ;
}


var bubblechart = function(data){



	var color = d3.scaleOrdinal(d3.schemeCategory10);	
	var bubblec = d3.select('#bubble')
		


	bubblec.selectAll('rect')
	.data(data)
	.enter()
	.append('circle')
	.attr('cx', function (d,i) { return ([(i+2) * 45]); })
	.attr('cy', function (d,i) { return (500+(100/(i+1))) - (5*[d.Rural_Population]); })
	.attr('r', function (d) { return ([d.Rural_Population]); })
	.attr("fill", d=>color(d.Rural_Population));


    bubblec.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.attr('x', function (d,i) { return ([(i+2) * 45]);})
		.attr('y', function (d,i) { return (500+(100/(i+1))) - (5*[d.Rural_Population]); })
		.attr('fill', 'black')
		.attr('font-size', '18px')
		.attr('text-anchor', 'middle')
		.attr('alignment-baseline', 'middle')
		.text(function (d) { return d.Country_Name; });




var width = 900, height = 1100;

var temp = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var svg = d3.select("#bubble")

var xscale = d3.scaleLinear()
    .domain([0, d3.max(temp)])
    .range([0, width ]);

var yscale = d3.scaleLinear()
        .domain([0, d3.max(temp)])
        .range([height/2, 0]);

var x_axis = d3.axisBottom()
        .scale(xscale);

var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

var xAxisTranslate = height/2 + 10;

    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)


	return ;
}



d3.csv('world.csv').then(function (data) { 
  console.log(data);
  tabulate(data);
  barchart(data)
  scatterchart(data)
  bubblechart(data)
});

