exports.read = function(fileName, callback) {
  require('fs').readFile(fileName, 'utf8', function(error, data) {
    callback(data);
  });
};
