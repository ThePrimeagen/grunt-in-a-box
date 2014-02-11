
var assert = require('assert');
describe('Mocha', function() {
    it('should make sure an assert works.', function(done) {
        assert.equal(1, 1);
        done();
    });
});