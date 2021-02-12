console.log('HI');
setTimeout(() => {
    console.log('First');
    setTimeout(() => {
        console.log('Second');
        setTimeout(() => console.log('Third'), 2000);
    }, 1000);
}, 500);

