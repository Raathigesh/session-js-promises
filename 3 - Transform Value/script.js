getData('http://localhost:3334/randomNumber').then(function(result) {
    console.log("Results : " + result.data);
    return result.data + 5;
}).then(function(addedResults) {
    console.log("Added Results : " + addedResults);
});