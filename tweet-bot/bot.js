console.log("\x1b[35m","Staring Bot...");

var Twit = require('twit');
var config = require('./config');
//console.log(config);

var T = new Twit(config);
//search keyword with number of tweets
var params = {
               q: 'volvo',
               count: 5
             };

//tweet search
T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    //console.log(data);
    var tweets = data.statuses;
    //console.log(tweets.length);
    for(var i=0; i < tweets.length; i++){
      console.log("\x1b[32m","Tweet "+ (i+1) + ":" + tweets[i].text);
    }
}

//tweet streaming.
//Reply with a tweet to whoever follows you.
var stream = T.stream('user');
stream.on('follow', followed);

function followed(event){
    console.log("follow event");
    var name = event.source.name;
    var screenName = event.source.screen_name;
    tweetIt('@' + screenName + 'Thank you for following');
}

//tweeting function
function tweetIt(txt) {

    //var r = Math.floor(Math.random()*100);
    var tweet = {status: txt};

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if(err) {
          console.log(err);
        } else {
          console.log("it worked..");
        }
     }
}
