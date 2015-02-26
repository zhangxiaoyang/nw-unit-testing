describe('./lib/sync.js', function() {
  before(function() {
    //do something
  });
  describe('max', function() {
    it('max(1, 2) should equal 2', function() {
      window.test.sync.max(1, 2).should.equal(2);
    });
  });
  after(function() {
    //do something
  });
});
