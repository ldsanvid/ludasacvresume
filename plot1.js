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

var layout = {barmode: 'stack', title:'2019 Presidential Election', xaxis:{title: 'Candidates'}, yaxis: {
  title: 'Voting %'}}

Plotly.newPlot('plot2', data, layout);

var trace4 = {
  x: ['December poll','February poll', "March - 1° poll", "March - 2° poll", "April poll", "Election result"],
  y: [20, 24, 25, 26, 27, 30],
  name:'Cambio Democrático',
  marker: {color: 'rgba(0, 168, 163, 1)'},
  type: 'scatter',
}

var trace5 = {
  x: ['December poll','February poll', "March - 1° poll", "March - 2° poll", "April poll", "Election result"],
  y: [52, 48, 44, 39, 36, 33],
  name:'PRD',
  marker: {color: 'rgba(245, 0, 0, 1)'},
  type: 'scatter',
}

var trace6 = {
  x: ['December poll','February poll', "March - 1° poll", "March - 2° poll", "April poll", "Election result"],
  y: [0, 1, 7, 12, 15, 18],
  name:'Independent',
  marker: {color: 'rgba(122, 122, 122, 1)'},
  type: 'scatter',
}

var data3 = [trace4, trace5, trace6];

var layout3 = {
  title:'Poll Tracking and Election Result', yaxis:{title:"%"}
};

Plotly.newPlot('plot3', data3, layout3)

var trace7 = {
  x: [8,17],
  y: ['Last poll', 'Result'],
  mode: 'markers',
  marker: {
    size:[40,90], color: 'rgba(245, 147, 0, 1)'}
};

var data4 = [trace7];

var layout4 = {
  title:'Poll Tracking and Election Result', yaxis:{title:"%"}
};

Plotly.newPlot('plot4', data4, layout4)