var userInfoPromise = getData('http://localhost:3334/userInfo');
var userCartInfo = getData('http://localhost:3334/cart');
var userTotalInfo = getData('http://localhost:3334/total');

Promise.all([userInfoPromise, userCartInfo, userTotalInfo]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});