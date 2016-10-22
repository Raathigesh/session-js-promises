function getData(url, callback) {    
    superagent.get(url, function(err, res) {
        if (err) {
            callback(err);
        }

        callback(null, JSON.parse(res.text));
    });    
}

getData('http://localhost:3334/randomNumber', function(err, res) {
    console.log(res);
});