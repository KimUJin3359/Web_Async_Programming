const url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

(async () => {
    try{
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        document
        .querySelector('div')
        .insertAdjacentHTML('beforeend', JSON.stringify(data));
    }catch (error){
        console.log(error);
        document.querySelector('div').textContent = '데이터를 가져올 수 없습니다';
    }
})();    