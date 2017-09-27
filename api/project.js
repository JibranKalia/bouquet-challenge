const http = require('http');

const options = {
  host: 'data.marincounty.org',
  path: '/resource/mw3d-ud6d.json'
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