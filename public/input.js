$(document).ready(() => {
  $('#yearpicker').monthpicker({ minYear: 2016, maxYear: 2017 });
  $('input:submit').click((data) => {
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/',
    });
    return true;
  });
});
