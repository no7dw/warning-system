/**
* User_account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
//用户资金账户信息
module.exports = {

  attributes: {
    user_id : { type: 'string' },
    //账户总额
    total_amount : function(){
      return this['deposit_amount'] + this['accumulated_earning'] - this['withdraw_deposit_amount'];
    },
    //可用金额
    available_amount : { type: 'float' },
    //充值总额
    deposit_amount : { type: 'float' },
    //奖励总额
    total_rewards: {type: 'float'},
    //应收款
    receivable_amount : { type: 'float' },
    //已收款
    received_amount : { type: 'float' },
    //提现总额
    withdraw_deposit_amount : { type: 'float' },
    management_cost : { type: 'float' },
    //累计收益
    accumulated_earning:{ type : 'float'},
    vip_cost : { type: 'float' },
    portfolios : { type: 'array' },
    // bankcard 数据结构 (object)
    //account_number			string		银行卡帐号
    //phone			          string	  银行预留手机号码
    //bank			          string	  中国建设银行"	所属银行
    //address			        string	  "广东省广州市海珠区新港中路支行"	支行地址
    //province            string
    //city                string
    //create_time         string
    //flag			          boolean	  标记该银行卡是否删除  true： 没有被删掉 false: 删掉
    //is_verify			      boolean	  0:是认证过，1是还没有认证，2是认证失败
    bankcard: { type: 'array'},
    //事务Id
    transactions_ids:{type:'array'}
  }
};

