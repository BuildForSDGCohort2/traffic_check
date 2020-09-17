// const {
//   CONSUMER_KEY,
//   CONSUMER_SECRET,
//   ACCESS_TOKEN,
//   ACCESS_TOKEN_SECRET,
// } = require("../config/key");
// const Twit = require("twit");

// const T = new Twit({
//   consumer_key: CONSUMER_KEY,
//   consumer_secret: CONSUMER_SECRET,
//   access_token: ACCESS_TOKEN,
//   access_token_secret: ACCESS_TOKEN_SECRET,
// });

// class Tweet {
//     constructor(){
//         this.name = "Hello Tweet!"
//     }

//     sayHi(){
//         return this.name
//     }

// getFollowers(){
//     T.get('followers/list', { screen_name: 'DominicNgalo' }, (err, data, response) => {
//         if(!err){
//         console.log(data.users)
//         }
//       });
// }

// async follow(){
/*try {
        let data = await T.postFriendshipsCreate({screen_name: 'DominicNgalo'});
        console.log(data);
        return data;
      } catch (e) {console.log(e._response);
        throw e._response;
      }*/
// return await T.postFriendshipsCreate({screen_name: 'DominicNgalo'})
//   .catch((e)=>{
//     throw e._response;
//   });
// await T.postFriendshipsCreate({screen_name: 'ochieng'})
//   .then((data)=>{
//     console.log(data);
//     return data;
//   })
//   .catch((error)=>{
//     console.log(error.message);
//     return error.message;
// });

// await T.post('friendships/create', {screen_name: 'DominicNgalo'}, (err, data, response) => {
//   if(err) {
//     console.log(err.message);
//     text = err.message;
//   }
// });
// console.log(err.message);
// return text;
//     }
// }

// module.exports = Tweet;
