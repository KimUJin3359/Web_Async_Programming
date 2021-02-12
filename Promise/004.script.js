function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("일어나기");
        }, 1000);
    });
};

function eatMeal() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("밥먹기");
        }, 1000);
    });
};

function drinkCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("커피 마시기");
        }, 1000);
    });
};

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("잠자기");
            reject(new Error('Too many coffee'));
        }, 1000);
    });
};

async function getAll(){
    try{
        let result1 = await wakeUp();
        console.log(result1);
        let result2 = await eatMeal();
        console.log(result2);
        let result3 = await drinkCoffee();
        console.log(result3);
        let result4 = await sleep();
        console.log(result4);
    } catch (err) {
        console.log(err);
    }
}

getAll();