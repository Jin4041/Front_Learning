const clockTitle = document.querySelector(".js-clock");

function getClock(){
  const date=new Date();
  const christmas=new Date('2023-12-25 00:00:00');
  const remainDate=christmas-date;//ms단위로 결과 반환
  const days=String(Math.floor(remainDate/(1000*60*60*24))).padStart(2,"0");//시간=ms/(ms*초*분*시간)
  const hours=String(Math.floor(remainDate/(1000*60*60)%24)).padStart(2,"0");
  const minutes=String(Math.floor(remainDate/(1000*60)%60)).padStart(2,"0");
  const seconds=String(Math.floor(remainDate/(1000%60)).padStart(2,"0");
  clockTitle.innerText=`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

getClock();
setInterval(getClock,1000);