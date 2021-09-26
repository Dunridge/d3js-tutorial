// TODO: see how to replace stuff in VCS
// data to be output in a bar chart
const DUMMY_DATA = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 11, region: "Indi" },
  { id: "d3", value: 12, region: "China" },
  { id: "d4", value: 6, region: "Germany" },
];

// this is how we can render data
// d3.select('div')
//   .selectAll('p')
//   .data(DUMMY_DATA)
//   .enter()
//   .append('p')
//   .text((data) => data.region);

const availableHeight = 200;

// calculate the position on the x and y axes 
const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([availableHeight, 0]);

// bar chart
const container = d3
  .select("svg")
  .classed("container", true);

const bars = container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", xScale.bandwidth())
  .attr("height", data => availableHeight - yScale(data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value));


setTimeout(() => {
  bars.data(DUMMY_DATA.slice(0,2)).exit().remove();
}, 2000); // after two second the bars are redrawn 