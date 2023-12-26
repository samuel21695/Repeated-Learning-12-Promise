/**
 * 변수 handle은 특별한 객체인 Promise를 가져왔습니다. (참조했다고합니다.)
 * console.log(handle)을 실행하면 Promise { <pending> }이 출력됩니다.
 * Promise 라는 이름에서 인스턴스로 객체가 출력된 것이고
 * <pending>은 Promise만의 특수한 '상태'를 의미합ㄴ디ㅏ.
 */

const handle = new Promise(function(resolve, reject) {
  // 1. Promise가 생성되고 첫 번째 setTimeout이 설정됩니다.
  // 이 시점에서 Promise의 상태는 pending입니다.
  setTimeout(function() {
    console.log(function() {
      console.log('첫번째');
      resolve();
    }, 3000);
  })
})