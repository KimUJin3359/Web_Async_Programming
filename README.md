# Web_Async_Programming

### 비동기와 Callback
- 동기 방식 : 한 업무가 끝나야, 다음 업무를 시작
- 비동기 방식 : 다른 업무를 기다리지 않고 진행(내부적으로 동작을 수행하면서, 지속적으로 Event가 발생했는지 감시)
- 비동기 구현은 콜백함수를 사용
- [실습1](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/SetTimeout/001.script.js)
  - 동기 방식(다른 작업을 수행할 수 없음)의 sleep 함수를 구현하여 message 출력하기
- [실습2](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/SetTimeout/002.script.js)
  - 비동기 함수(setTimeout, 다른 작업을 수행할 수 있음)를 사용하여 message 출력하기
- [실습3](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/SetTimeout/003.async_func.html)
  - 사각형 클릭 시 200px로 위치 변경 및 1.5초후 메시지 출력
- [실습4](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/SetTimeout/004.script.js)비동기 API를 활용한 동기 구현
  - HI 출력 후 0.5초 후에 First, 그 1초 후 Second, 2초 후 Third가 출력
- [실습5](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/SetTimeout/005.script.js)  
  - 비동기로 함수 호출하여 값을 저장 후 게산
- Callback Hell
  - Async 함수들로 Sync 동작을 구현하는 코드
  - 이해하기 힘들 정도로 가독성ㅇ ㅣ떨어져, 유지보수가 힘듦  

### Thread / Async 차이
- Single Thread 
  - 하던 작업을 다 하고난 후, 다른 동작을 수행함
- Multi Thread
  - Thread가 여러개 존재하는 것
  - 단순히 비유하자면, 종업원의 수가 늘어난 것
  - 정보 및 신호 전달 등이 중요
  - 즉, **여러 함수들을 동시에 수행**
- Async
  - 하나의 Thread가 여러개의 동작을 수행하는 것
  - Callback으로 등록된 함수가 실행되지 않을 시, 다른 작업을 하다가 Callback 함수가 호출되면 해당 작업 수행
  - 즉, **다른 함수부터 수행**

### Promise
- 비동기 작업을 좀 더편하게 할 수 있도록 도입
- new Promise((resolve,reject) => {});
- pending 상태 : 대기 상태, resolve나 reject가 실행되기 전의 상태
- fulfilled 상태 : 이행 상태, resolve 호출 시의 상태
- rejected 상태 : 실패 상태, reject 호출 시의 상태
- [실습1](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/Promise/001.script.js)
  - resolve 호출 시 'GOOD', reject 호출 시 'OH NO' 출력
- Promise Chaining
  - Promise.then을 호출하면 자동적으로 Promise가 return 된다
- [실습2](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/Promise/002.script.js)  
  - Promise Chaining을 활용
  
### async / await  
- Promise를 쉽게 사용하기 위해 도입
- async는 함수 앞에 위치
- await은 async 함수 내부에 위치
- promise를 반환
- [실습1](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/001.make_all.html)
  - reduce/map, promise 및 async await을 활용
  - 2초 후에 background color를 blue로 변경, 1초 후에 background color를 white로 변경, 2초 후 menu 판을 웹상에 나타나게 하기
  
### AJAX
- AJAX(Asynchronous Javascript and XML)
  - 서버와 통신하기 위해 XMLHttpRequest 객체 사용
  - 비동기성으로 페이지 새로고침을 하지않고도 수행
  - REST API(Representational State Transfer)
    - 소프트웨어 개발 아키텍처의 한 형식
    - 자원을 이름으로 구분하고 자원의 상태를 주고 받는 모든 것
    - 일반적으로 Rest라 하면 HTTP를 통해 CRUD를 실행하는 API
  - jsonplaceholder
    - 테스트 및 prototype을 위한 Rest API 서비스
//     추가
  - XMLHttpRequest
    - [실습1](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/AJAX/001.script.js)
      - XMLHttPRequest 사용해보기
    - [실습2](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/AJAX/002.script.js)  
      - XMLHttpRequest를 사용해 받아온 data를 json형식으로 refactoring
  - fetch API
    - XMLHttpRequest와 유사하나 더 발전된 API
    - 객체를 Promise 형태로 반환
    - json의 타입별로 쉽게 적용이 가능
    - [실습3](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/AJAX/003.script.js)
      - fetch API를 사용하여 data를 받아오기
  - axios
    - 가장 널리 쓰이는 http 통신 라이브러리
    - Vue/React에서도 권고 라이브러리로 지정됨
    - Promise 형태 리턴
    - [실습4](https://github.com/KimUJin3359/Web_Async_Programming/blob/master/AJAX/004.script.js)
      - axios를 사용하여 data를 받아오기
      
