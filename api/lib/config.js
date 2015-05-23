module.exports = {

    config:[
        {
            "name":'user_account',
            "query":"{deposit_amount:{$gt:4000}}",
            "warning-way":"email"
        },
        {
            "name":'user_account_summary',
            "query":"{totalGain:{$gt:30}}",
            "warning-way":"sms"

        }
    ]

};