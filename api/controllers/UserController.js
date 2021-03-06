/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {},
  test : function(req, res){
      var   gm  =  {
          "user_account":User_account,
          "user_account_summary":User_account_summary
      };

      var config =   require('../lib/config').config;

      var obj = gm[config[0].name];

      var query = config[0].query.warning;
      console.log("query", query);
      obj.find(query , function(err, result){
          console.log(err, result.length);
          res.json(200,{result: result.length});
      });


      

  }
};

