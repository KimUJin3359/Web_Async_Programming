function sleep(delay) {
    let start = new Date().getTime();
    let limit = start + delay;
    while (true) {
        let now = new Date().getTime();
        if (now >= limit) break;
    }
}
sleep(1000);
console.log("HI");