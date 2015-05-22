/**
* User_account_summary.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user_id : { type: 'string' },
    time : { type: 'integer'},
    //投资总金额
    amount :  { type: 'float'},
    totalGain :  { type: 'float'},
    dailyGain :  { type: 'float'},
    dailygain_percentage: { type : 'float'}
  }
};

