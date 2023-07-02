const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //반드시 두자리의 수가 표기되며 한 자리일 경우 앞에 0을 붙여 자릿수를 맞춤
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //1초 차이를 없애기 위해 한 번 바로 실행
setInterval(getClock, 1000); //1초마다 실행
