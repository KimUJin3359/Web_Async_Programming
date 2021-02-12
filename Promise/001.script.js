console.log('어서오세요');
console.log('주문하세요');
console.log('고민하시는 동안 다른 것을 하고 있겠습니다');
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("주문하겠습니다");
        resolve();  //성공 실패에 따른 로직
    }, 1000);
});
console.log('서빙');
pro.then(() => {
    console.log('GOOD');
}).catch(() => {
    console.log('OH NO');
})
