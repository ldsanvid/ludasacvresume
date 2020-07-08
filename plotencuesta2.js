var traceamloapro = {
    x: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    y: [58, 56, 52, 48, 50, 47],
    mode: 'lines',
    name: "Aprobación de AMLO",
    line:{
      dash: 'dashdot',
      width: 4
    },
    marker: {
      color: 'rgba(38,215,25,1)'
    }
  };
  
  var traceamlodesap = {
    x: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    y: [42, 44, 48, 52, 49, 52],
    mode: 'lines',
    name: "Desaprobación de AMLO",
    line:{
      dash: 'dashdot',
      width: 4
    },
    marker: {
      color: 'rgba(137,16,16,1)'
    }
  };
  
  var tracetrumpapproval = {
    x: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    y: [47, 48, 47, 46, 49, 39],
    mode: 'lines',
    name: "Aprobación de Trump",
    line:{
      dash: 'solid',
      width: 4
    },
    marker: {
      color: 'rgba(68,26,219,1)'
    }
  };
  
  var tracetrumpdisapproval = {
    x: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    y: [51, 49, 49, 51, 48, 57],
    mode: 'lines',
    name: "Desaprobación de Trump",
    line:{
      dash: 'solid',
      width: 4
    },
    marker: {
      color: 'rgba(219,26,26,1)'
    }
  };
  
  var dataencuestas = [traceamloapro, traceamlodesap, tracetrumpapproval, tracetrumpdisapproval];
  
  var layoutencuestas = {
    title:'Niveles de aprobación 2020', yaxis:{title:"%"}
  };
  
  Plotly.newPlot('plotencuesta', dataencuestas, layoutencuestas)