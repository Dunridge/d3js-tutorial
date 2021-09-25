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

// bar chart
const container = d3
  .select("div")
  .classed("container", true)
  .style("border", "1px solid red");

const bars = container
  .selectAll("div")
  .data(DUMMY_DATA)
  .enter()
  .append("div")
  .classed("bar", true)
  .style("width", '50px')
  .style("height", data => (data.value * 15) + 'px');
