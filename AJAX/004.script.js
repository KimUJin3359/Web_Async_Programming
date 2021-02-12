const url = "https://jsonplaceholder.typicode.com/todos";

async function test() {
    try {
        //객체 안의 property 명과 내가 만들고자 하는 변수명이 같을 때
        //{ 안에 변수명 }
        const { data } = await axios.get(url);
        document
            .querySelector('div')
            .insertAdjacentHTML('beforeend', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

test();