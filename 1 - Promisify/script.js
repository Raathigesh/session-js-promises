function getData(url) {
    return new Promise(function(resolve, reject) {
         superagent.get(url, function(err, res) {
            if (err) {
                reject(err);
            }

            resolve(JSON.parse(res.text));
        });
    });
}

getData('http://localhost:3334/randomNumber').then(function(res) {
    console.log(res);
});