const http = require('http');
const bl = require('bl');

const requests = [process.argv[2], process.argv[3], process.argv[4]];
const responses = [];

requests.forEach((request, index) => {
  http.get(request, (response) => {
    response.setEncoding('utf8').pipe(
      bl((err, data) => {
        if (err) return console.log(err);

        responses[index] = data.toString();
        if (responses[0] && responses[1] && responses[2]) {
          responses.forEach((response) => {
            console.log(response);
          });
        }
      })
    );
  });
});
