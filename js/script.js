let a = [];
let stat = {};

function generateRandom() {
    return Math.round(10 * Math.random());
};

function generateArray() {
    for (let i = 0; i < 1000; i++) {
        a.push(generateRandom());
    };
    console.log(a);
};

generateArray();

function calcStat() {
    for (let i = 0; i < a.length; i++) {
        if (stat[a[i]]) stat[a[i]]++;
        else stat[a[i]] = 1;   
    };
    console.log(stat);
};

calcStat();

function vizArray() {
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    let statChart = [["Element", "Density", { role: "style" }]];
    for (var key in stat) {
        let temp = [];
        temp.push(key);
        temp.push(stat[key]);
        temp.push('green');
        statChart.push(temp);
    };
    console.log(statChart);
    function drawChart() {
    var data = google.visualization.arrayToDataTable(statChart);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
  }
};

vizArray();