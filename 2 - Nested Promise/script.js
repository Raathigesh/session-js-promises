getData('http://localhost:3334/randomNumber').then(function(response) {
    console.log('Random Number ' + response.data)
    return getData('http://localhost:3334/isEven?value=' + response.data);
}).then(function(isEven) {
    console.log(isEven);
});