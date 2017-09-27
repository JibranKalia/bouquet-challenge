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
            text: 'Bouqet.ai Exercise',
          },
          subtitle: {
            text: 'Contract amounts in Marin County by department',
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
              text: 'Total Amount ($)',
            },
          },
          legend: {
            enabled: false,
          },
          tooltip: {
            pointFormat: ' <b>{point.y:,.0f}</b>',
          },
          series: [{
            name: 'Population',
            data: stuff,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:,.0f}',
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
