
console.log(d3);

d3.select("div") // select a div
  .selectAll("p") // select all paragraphs in that div
  .data([1, 2, 3]) // bind data to those paragraphs
  .enter() // tell me which paragraphs are missing
  .append("p") // appends a paragraph for every missing one
  // .text('Hello'); // text task
  .text((data) => data); // add the data points from the data array in paragraphs

// now d3.js will render 3 new div for each one data point
