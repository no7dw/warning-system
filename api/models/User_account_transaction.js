/**
* Order.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    amount: { type: 'float' } ,
    user_id : { type: 'string' },
    time : { type: 'integer' },
    asset_id : { type : 'string'},
    //1.购买，2.提现
    action_type : { type : 'integer'},
    //事务Id
    transactions_ids:{ type:'array'}
  }
};

