describe('./lib/async.js', function() {
  before(function() {
    //do something
  });
  describe('read', function() {
    it('read ./package.json should succeed', function(done) {
      (window.test.async).read('./package.json', function(data) {
        done();
      });
    });
  });
  after(function() {
    //do something
  });
});
