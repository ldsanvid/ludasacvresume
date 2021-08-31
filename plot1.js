var trace0= {
  x: [12],
  y: ['CD'],
  name: '2015',
  orientation: 'h',
  marker: {
    color: 'rgba(87, 20, 255, 1)',
    width: 1
  },
  type: 'bar'
};


var trace3 = {
  x: [25],
  y: ['CD'],
  name: '2019',
  orientation: 'h',
  marker: {
    color: 'rgba(15, 239, 255, 1)',
    width: 1
  },
  type: 'bar'
};

var data2= [trace0, trace3];

var layout2 = {
  title: "Centro Democrático's voting share in Norte de Santander",
  barmode: 'stack', xaxis:{title: 'Voting %'}
};

Plotly.newPlot('plot', data2, layout2);

var trace1 = {
  x: ['VAMOS', 'UNE'],
  y: [12, 22],
  name: 'First Round',
  marker: {color: 'rgba(87, 255, 15, 1)'},
  type: 'bar',
};

var trace2 = {
  x: ['VAMOS', 'UNE'],
  y: [58, 42],
  name: 'Second Round',
  marker: {color: 'rgba(50, 168, 0, 1)'},
  type: 'bar',
};

var data = [trace1, trace2];

var layout = {barmode: 'stack', title:'2019 Presidential election', xaxis:{title: 'Parties'}, yaxis: {
  title: 'Voting %'}}

Plotly.newPlot('plot2', data, layout);

var trace4 = {
  x: ['December poll','February poll', "March poll", "April poll", "May poll", "Election result"],
  y: [38, 38, 39, 42, 47, 53],
  name:'PAN-PRI-PRD',
  marker: {color: 'rgba(57, 51, 228, 1)'},
  type: 'scatter',
}

var trace5 = {
  x: ['December poll','February poll', "March poll", "April poll", "May poll", "Election result"],
  y: [36, 38, 36, 35, 32, 32],
  name:'Morena',
  marker: {color: 'rgba(142, 35, 35, 1)'},
  type: 'scatter',
}

var data3 = [trace4, trace5];

var layout3 = {
  title:'Poll Tracking and Election Result', yaxis:{title:"%"}
};

Plotly.newPlot('plot3', data3, layout3)

var trace7 = {
  x: ['December poll','February poll', "March poll", "April poll", "May poll", "Election result"],
  y: [33, 35, 34, 38, 42, 44],
  name:'PAN',
  marker: {color: 'rgba(57, 51, 228, 1)'},
  type: 'scatter',
}

var trace8 = {
  x: ['December poll','February poll', "March poll", "April poll", "May poll", "Election result"],
  y: [23, 21, 24, 20, 21, 22],
  name:'Morena',
  marker: {color: 'rgba(142, 35, 35, 1)'},
  type: 'scatter',
}

var trace9 = {
  x: ['December poll','February poll', "March poll", "April poll", "May poll", "Election result"],
  y: [24, 22, 22, 23, 24, 25],
  name:'PRI-PRD',
  marker: {color: 'rgba(20, 157, 25, 1)'},
  type: 'scatter',
}

var data4 = [trace7, trace8, trace9];

var layout4 = {
  title:'Poll Tracking and Election Result', yaxis:{title:"%"}
};

Plotly.newPlot('plot4', data4, layout4)
