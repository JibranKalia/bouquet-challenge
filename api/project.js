const http = require('http');

const options = {
  host: 'data.marincounty.org',
  path: '/resource/mw3d-ud6d.json'
};

module.exports.dataCleanup = function dataCleanup(data) {
  return new Promise((resolve, reject) => {
    const final = [];
    data = JSON.parse(data);
    data.forEach((element) => {
      tmp = [];
      tmp.push(element.department);
      tmp.push(parseInt(element.amount));
      //tmp.month_and_year = new Date(element.month_and_year).getTime();
      final.push(tmp);
    });
    console.log(final[0]);
    resolve(final);
  });
}; 

module.exports.callApi = function callApi() {
  return new Promise((resolve, reject) => {
    const request = http.get(options, (response) => {
      const body = [];
      response.on('data', chunk => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', err => reject(err));
    request.end();
  });
};