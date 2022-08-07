// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 합니다.


const $id = document.getElementById("id")
const $idmsg = document.getElementById('id-msg')
window.addEventListener("load", function(){
  $id.focus()
})

// 2. 유효성 검사 로직
// 대상: ID,PW,PW 확인
// 이벤트: input focus out
// 핸들러: input의 유효성

const $pw = document.getElementById("pw")
const $pwmsg = document.getElementById('pw-msg')
const $pwCheck = document.getElementById('pw-check')
const $pwCheckMsg = document.getElementById('pw-check-msg')
const $submit = document.getElementById('submit')


const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$")
const PW_REGEX = new RegExp("^[a-zA-Z0-9_-]{8,16}$")

const ID_ERROR_MSG = {
  required: '빈칸 에러',
  invalid: '형식 에러'
}

const PW_ERROR_MSG = {
  required: '빈칸 에러',
  invalid: '형식 에러'
}

const PW_CHECK_ERROR_MSG = {
  required: '빈칸 에러',
  invalid: '형식 에러'
}

const validateId = (value) => {
  // 모든 필드의 값은 빠짐 없이 입력해야 합니다.
  // 5~20자 영문 소문자 숫자 특수기호 (_) (-)만 사용 가능
  // custom error
  let isValidId
  // id칸에 빈칸일때 required 호출 
  if (value.length === 0) {
    isValidId = 'required'

  } else {
    isValidId = ID_REGEX.test(value) ? true: 'invalid'
  }
  if (isValidId !== true) {
    $id.classList.add('border-red-600')
    $idmsg.innerText = ID_ERROR_MSG[isValidId]
  } else { 
    $id.classList.remove('border-red-600')
    $idmsg.innerText = ''
  }
}

const validatePw = (value) => {
  let isValidPw
  if (value.length === 0) {
    isValidPw = 'required'
  } else {
    isValidPw = PW_REGEX.test(value) ? true: 'invalid'
  }
  if(isValidPw !== true) {
    $pw.classList.add('border-red-600')
    $pwmsg.innerText = PW_ERROR_MSG[isValidPw]
  } else {
    $pw.classList.remove('border-red-600')
    $pwmsg.innerText = ''
  }
  
}
const validatePwCheck = (value) => {
  let isValidPwCheck
  if (value === 0) {
    isValidPwCheck = 'required'
  } else {
    isValidPwCheck = $pw.value === value ? true : 'invalid'
  } if(isValidPwCheck !== true) {
    $pwCheck.classList.add('border-red-600')
    $pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[isValidPwCheck]
  } else {
    $pwCheck.classList.remove('border-red-600')
    $pwCheckMsg.innerText = ''
  }
  
}

$id.addEventListener('focusout', () => validateId($id.value))
$pw.addEventListener('focusout', () => validatePw($pw.value))
$pwCheck.addEventListener('focusout', () => validatePwCheck($pwCheck.value))

$submit.addEventListener('click', (e) => {
  e.preventDefault()
  validateId($id.value)
  validatePw($pw.value)
  validatePwCheck($pwCheck.value)
})