const http = require('http');

const options = {
  host: 'data.marincounty.org',
  path: '/resource/mw3d-ud6d.json',
};

module.exports.dataCleanup = function dataCleanup(data, time) {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data);
    } catch (e) {
      reject(e);
    }
    const step1 = data.map((element) => {
      delete element.contract_number;
      delete element.unique_id;
      delete element.vendor_name;
      delete element.review_document;
      delete element.review_document_description;
      element.month_and_year = new Date(element.month_and_year).getTime();
      element.amount = parseInt(element.amount, 10);
      return element;
    });
    const step2 = step1.filter(element => element.month_and_year == time);

    const arr = [];
    step2.forEach((element) => {
      const obj = arr.find(x => x.department === element.department);
      if (obj === undefined) {
        arr.push(element);
      } else {
        const index = arr.indexOf(obj);
        arr[index].amount += element.amount;
      }
    });
    const step3 = arr.map((element) => {
      const tmp = [];
      tmp.push(element.department);
      tmp.push(element.amount);
      return (tmp);
    });
    resolve(step3);
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
