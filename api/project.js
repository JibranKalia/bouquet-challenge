const http = require('http');

const options = {
  host: 'data.marincounty.org',
  path: '/resource/mw3d-ud6d.json'
};

module.exports.dataCleanup = function dataCleanup(data) {
  return new Promise((resolve, reject) => {
    data = JSON.parse(data);
    level1 = data.map((element) => {
      tmp = [];
      tmp.push(element.department);
      tmp.push(parseInt(element.amount));
      tmp.month_and_year = new Date(element.month_and_year).getTime();
      return (tmp);
    });
    level2 = level1.filter((time) => {
      return time.month_and_year == 1483228800000
    });
    console.log(level2);

    level3 = level2.forEach((element) => {
      var array;
      if (element[0] in array)
      {

      }
      else

    });

    /*
    level3 = level2.reduce((allNames, name) => {
      if (name[0] in allNames) {
        allNames[name[0]] += name[1];
      }
      else {
        allNames[name[0]] = name[1];
      }
      return allNames;
    }, []);
    console.log(level3);
    level4 = level3.map((element) => {
    });
    data.forEach((element) => {
      time = new Date(element.month_and_year).getTime();
      if (time == 1483228800000) {
        tmp = [];
        tmp.push(element.department);
        tmp.push(parseInt(element.amount));
        //tmp.month_and_year = new Date(element.month_and_year).getTime();
        final.push(tmp);
      }
    });
    */
    //console.log(final);
    resolve(level2);
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