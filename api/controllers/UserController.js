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
      //var gm = require('../api/services/boot').gm;
      var config =   require('../lib/config').config;
      console.log(gm[config[0].name]);
      res.json(200,{});
  }
};

