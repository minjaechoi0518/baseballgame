// 컴퓨터가 뽑은 3개의 숫자를 저장할 배열 생성
var answer = [];

// 중복되지 않는 0부터 9까지의 숫자 3개를 뽑아 배열에 저장
while(answer.length < 3) {
  var num = Math.floor(Math.random() * 10);
  if(!answer.includes(num)) {
    answer.push(num);
  }
}

// 사용자가 입력한 3개의 숫자를 저장할 배열 생성
var guess = [];

// 사용자가 3개의 숫자를 입력하고, 맞출 때까지 반복
while(guess.join('') !== answer.join('')) {

  // 사용자가 숫자를 입력하도록 요청
  var input = prompt('0부터 9까지의 숫자 3개를 입력해주세요. (중복되지 않게)');

  // 사용자가 입력한 숫자를 배열로 변환
  guess = input.split('').map(function(num) {
    return parseInt(num);
  });

  // 스트라이크와 볼의 개수를 저장할 변수 생성
  var strike = 0;
  var ball = 0;

  // 스트라이크와 볼의 개수 계산
  for(var i = 0; i < answer.length; i++) {
    if(answer[i] === guess[i]) {
      strike++;
    } else if(answer.includes(guess[i])) {
      ball++;
    }
  }

  // 사용자에게 결과 알림
  if(strike === 3) {
    alert('축하합니다! 숫자를 모두 맞추셨습니다!');
  } else if(strike === 0 && ball === 0) {
    alert('아웃입니다.');
  } else {
    alert(strike + ' 스트라이크, ' + ball + ' 볼입니다.');
  }
}