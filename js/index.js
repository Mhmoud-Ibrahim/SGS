const lValues = [100,200,300,400,500,600,700,800,900,1000];
new Chart("Chart", {
  type: "line",
  data: {
    labels: lValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "#bb2ace",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


// chart 2

var xValues = ["opened", "Emails sent", "Reached"];
var yValues = [30, 52, 19];
var barColors = [
  "#b91d",
  "#bb2ace",
  "#d15f",
];
new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display:false,
  
    }
  }
});

