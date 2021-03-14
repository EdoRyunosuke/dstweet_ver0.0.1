const Twitter = require('twitter')
const fs = require('fs')

var client = new Twitter({
    consumer_key: 'YourComsuerKey',
    consumer_secret: 'YourSecretComsumerKey',
    access_token_key: 'YourAccessTokenKey',
    access_token_secret: 'YourSecretTokenKey'
})

const params = {screen_name: 'YourAccountName',count:1};

let objz={}

console.log("@" + params.screen_name);
client.get('statuses/user_timeline', params, function(error, tweet, response){
    if (!error) {
        console.log(tweet)
        fs.writeFileSync('/src/componets/timeline.json', tweet, (err) => {
            if (err) {
                console.log(err)
            }
        })
        }
    }
);

