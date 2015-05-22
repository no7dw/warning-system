/**
* User_share.js
*
* @description :: This collection contains all of the sharing from user's activities,such as Beginner Plan , etc
* @notation    ::
*   uid : The string of user's id ;
*   type: The string of the type of share, for example, user_id : "beginner" ;
*   tasks : The array of the list of this task.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uid : {
      type: 'string'
    },
    type: {
      type: 'integer'
    },
    type_name:{
       type: 'string'
    } ,
    status:{
       type:'integer'
    } ,
    tasks: {
      type: 'array'
    }
  }
};

