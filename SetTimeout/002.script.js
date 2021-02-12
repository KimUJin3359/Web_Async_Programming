function hello(){
    console.log("HI");
}
setTimeout(hello, 1000);
setTimeout(() => console.log('HI2'), 2000);