function plus(number, callback){
    console.log(`number : ${number}`);
    setTimeout(() => {
        const result = number + 1;
        if (callback){
            callback(result);
        }
    })
}
plus(0, plus);