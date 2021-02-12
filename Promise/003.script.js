
async function test(){
    return await setTimeout(() => '싸피', 1000);
}
test().then(res => console.log(res));