(async function () {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const { data } = await axios.get(url);
    const arr = data.reduce((acc, cur) => {
        if (cur.completed === false && cur.userId % 2 === 0){
            if (cur.title.length >= 10 && cur.title.indexOf('qua') > 0){
                acc.push(cur);
            }
        }
        return (acc);
    }, []);
    console.log(arr);
})();