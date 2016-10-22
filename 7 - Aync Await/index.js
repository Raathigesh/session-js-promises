require("babel-polyfill");
 
import superagent from "superagent";
 
// promise returning function
function getData(url) {
    return new Promise(function(resolve, reject) {
         superagent.get(url, function(err, res) {             
            if (err) {
                reject();
            }

            resolve(res.text);
        });
    });
}

async function getMessage() {
  try {
    var results = await getData('http://localhost:3334/randomNumber');    
    // now you can write this like syncronous code!
    console.log(results);
  } catch (e) {
    // promise was rejected and we can handle errors with try/catch!
  }
}
 
 
getMessage();