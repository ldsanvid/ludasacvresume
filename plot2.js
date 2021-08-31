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
    title: "Porcentaje de votación de Centro Democrático en el Norte de Santander",
    barmode: 'stack', xaxis:{title: '% de votación'}
  };
  
  Plotly.newPlot('plot', data2, layout2);
  
  var trace1 = {
    x: ['VAMOS', 'UNE'],
    y: [12, 22],
    name: 'Primera vuelta',
    marker: {color: 'rgba(87, 255, 15, 1)'},
    type: 'bar',
  };
  
  var trace2 = {
    x: ['VAMOS', 'UNE'],
    y: [58, 42],
    name: 'Segunda vuelta',
    marker: {color: 'rgba(50, 168, 0, 1)'},
    type: 'bar',
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'stack', title:'Elección Presidencial de 2019', xaxis:{title: 'Candidatos'}, yaxis: {
    title: '% de votación'}}
  
  Plotly.newPlot('plot2', data, layout);
  
  var trace4 = {
    x: ['Encuesta de diciembre','Encuesta de febrero', "Encuesta de de marzo", "Encuesta de abril", "Encuesta de mayo", "Resultado de la elección"],
    [38, 38, 39, 42, 47, 52],
    name:'PAN-PRI-PRD',
    marker: {color: 'rgba(57, 51, 228, 1)'},
    type: 'scatter',
  }
  
  var trace5 = {
    x: ['Encuesta de diciembre','Encuesta de febrero', "Encuesta de de marzo", "Encuesta de abril", "Encuesta de mayo", "Resultado de la elección"],
    y: [36, 38, 36, 35, 32, 32],
    name:'Morena',
    marker: {color: 'rgba(142, 35, 35, 1)'},
    type: 'scatter',
  }
  
  var data3 = [trace4, trace5];
  
  var layout3 = {
    title:'Seguimiento de encuestas y resultado final', yaxis:{title:"%"}
  };
  
  Plotly.newPlot('plot3', data3, layout3)
  
  var trace7 = {
  x: ['Encuesta de diciembre','Encuesta de febrero', "Encuesta de de marzo", "Encuesta de abril", "Encuesta de mayo", "Resultado de la elección"],
  y: [33, 35, 34, 38, 42, 44],
  name:'PAN',
  marker: {color: 'rgba(57, 51, 228, 1)'},
  type: 'scatter',
}

var trace8 = {
  x: ['Encuesta de diciembre','Encuesta de febrero', "Encuesta de de marzo", "Encuesta de abril", "Encuesta de mayo", "Resultado de la elección"],
  y: [23, 21, 24, 20, 21, 22],
  name:'Morena',
  marker: {color: 'rgba(142, 35, 35, 1)'},
  type: 'scatter',
}

var trace9 = {
  x: ['Encuesta de diciembre','Encuesta de febrero', "Encuesta de de marzo", "Encuesta de abril", "Encuesta de mayo", "Resultado de la elección"],
  y: [24, 22, 22, 23, 24, 25],
  name:'PRI-PRD',
  marker: {color: 'rgba(20, 157, 25, 1)'},
  type: 'scatter',
}

var data4 = [trace7, trace8, trace9];

var layout4 = {
  title:'Seguimiento de encuestas y resultado final', yaxis:{title:"%"}
};

Plotly.newPlot('plot4', data4, layout4)
