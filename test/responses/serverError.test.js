/**
 * Created by leo on 1/20/15.
 */


var should = require('should');
var request = require('superagent');

describe("serverError Response test !", function() {
  describe("test serverError request !", function() {
    it("should response serverError view !", function(done) {
      request.get(sails.getBaseurl()+"/api/v1/response/serverError")
        .end(function(err,res){
          console.log(res.text)
          res.text.should.match(/E_VIEW_FAILED/);
          done() ;
        }) ;
    });
  });
});

