$(document).ready(() => {
  $('#yearpicker').monthpicker({ minYear: 2016, maxYear: 2017 });
  $('input:submit').click(() => {
    const data = document.getElementById('yearpicker').value * 1000;
    $.ajax('/data', {
      type: 'GET',
      url: '/data',
      data: $.param({ time: data }),
      success(stuff) {
        Highcharts.chart('container', {
          chart: {
            type: 'column',
          },
          title: {
            text: '',
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
              format: '{point.y}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif',
              },
            },
          }],
        });
      },
    });
    return false;
  });
});
