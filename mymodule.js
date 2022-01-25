const fs = require('fs');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);

    list = list.filter((file) => file.endsWith(`.${ext}`));
    callback(null, list);
  });
};
