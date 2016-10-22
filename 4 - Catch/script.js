getData('http://localhost:3334/randomNumber').then(function(res) {
    console.log('Received number : ' + res.data);
    if (res.data === 0) {
        throw new Error('Received 0');
    }    
}).then(function(result) {
    console.log("Saving the number...");
}).then(undefined, function(err) {
    console.log(err);
});