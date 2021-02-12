// 1. httpRequest를 만든다
//    open 메소드는 서버로 보낼 Ajax 형식을 설정
//    send 메소드는 작성된 Ajax 요청을 서버로 전달
// 2. 서버 응답 처리에 대한 로직은 httpRequest.onreadystateChange 활용

function getData() {
    const httpRequest = new XMLHttpRequest();
    console.log(httpRequest);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === httpRequest.DONE) {
            if (httpRequest.status === 200 || httpRequest.status === 201){
                console.log(httpRequest.response);
            }
            else {
                console.log(httpRequest.responseText);
            }
        }
    }
    httpRequest.open('GET', "https://jsonplaceholder.typicode.com/todos");
    httpRequest.send();
}


const data = getData();