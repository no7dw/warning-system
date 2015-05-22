/**
* User_account_cashflow.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
//用户账户的现金流
module.exports = {

  attributes: {
    user_id : { type: 'string' },
    time : { type: 'integer'},
    amount : { type: 'float'},
    //1:充值金额 2:回款金额 3:奖励金额,-1.撤销提现,-2提现 -3.撤销
    type : { type: 'integer'},
    remark : { type : 'string'},
    order_id : { type : 'string' },

    //事务Id
    transactions_ids:{type:'array'}
  }
};

