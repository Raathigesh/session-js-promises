function getDragon(name) {
    if (name === "Rhaegal") {
        return Promise.resolve({
            name: "Rhaegal",
            Species: "Dragon",
            Status: "Alive"
        });
    } else if (name === "Drogon") {
        return Promise.reject(new Error("Sorry! You might want to talk to Khalesi!"));
    } else {
        return getData('http://localhost:3334/dragon');
    }    
}

getDragon("Rhaegal").then(function(res){
    console.log(res);
});

getDragon("Drogon").catch(function(err){
    console.log(err);
});

getDragon("Viserion").then(function(res){
    console.log(res);
});