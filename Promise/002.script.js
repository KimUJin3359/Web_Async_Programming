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
            resolve("잠자기");
        }, 1000);
    });
};

// wakeUp().then(data => {
//     console.log(data);
//     eatMeal().then(data => {
//         console.log(data);
//         drinkCoffee().then(data => {
//             console.log(data);
//             sleep().then(data => {
//                 console.log(data);
//             })
//         });
//     });
// });

wakeUp()
    .then(data => {
        console.log(data);
        return eatMeal();
    })
    .then(data => {
        console.log(data);
        return drinkCoffee();
    })
    .then(data => {
        console.log(data);
        return sleep();
    })
    .then(data => {
        console.log(data);
    });