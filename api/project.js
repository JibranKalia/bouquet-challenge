const https = require('https');
const http = require('http');

const options = {
  host: 'www.google.com',
  path: '/index.html',
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

/*
module.exports.callApi = function callApi() {
    return new Promise(((resolve, reject) => {
      let req = https.request(options, (res) => {
          console.log(res);
          resolve(res);
      });
    }));
};
*/
