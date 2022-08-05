// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 합니다.


const $id = document.getElementById("id")
window.addEventListener("load", function(){
  $id.focus()
})

// 2. 유효성 검사 로직
// 대상: ID,PW,PW 확인
// 이벤트: input focus out
// 핸들러: input의 유효성

const $pw = document.getElementById("pw")
const $pwCheck = document.getElementById('pw-check')


var ID_REGEX = new RegExp("-+c")

const validateId = () => {
  ID_REGEX.test()
}

$id.addEventListener('focusout', validateId)