$.getJSON('/data', (stuff) => {
  console.log(stuff);
  Highcharts.chart('container', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'World\'s largest cities per 2014',
    },
    subtitle: {
      text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Amount',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: ' <b>{point.y}</b>',
    },
    series: [{
      name: 'Population',
      data: stuff,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    }],
  });
});
