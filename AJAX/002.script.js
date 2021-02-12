function getData(){
    return new Promise((resolve, reject) => {
        const httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === httpRequest.DONE){
                if (httpRequest.status === 200 || httpRequest.status === 201) {
                    resolve(httpRequest.response);
                } else {
                    reject('에러발생');
                }
            }
        };
        httpRequest.open('GET', "https://jsonplaceholder.typicode.com/todos");
        httpRequest.responseType = 'json';
        httpRequest.send();
    });
}
getData().then(li => console.log(li));

(async () => {
    const data = await getData();
    console.log(data);
})();