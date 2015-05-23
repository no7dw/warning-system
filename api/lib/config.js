module.exports = {

    config:[
        {
            "name":"user_account",
            "query":{
              "warning":{deposit_amount:{$gt:70}},
              "fatal":{deposit_amount:{$gt:300}}
            },
            "warning-ways":{
                "waring":"email",
                "fatal":"sms"   
            }
        },
        {
            "name":"user_account_summary",
            "query":{
              "warning":{totalGain:{$gt:30}},
              "fatal":{totalGain:{$gt:300}}
            },
            "warning-ways":{
                "waring":"email",
                "fatal":"sms"   
            }

        }
    ]

};