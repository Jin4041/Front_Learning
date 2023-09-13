const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //이미지를 랜덤으로 정할 수 있게

//const bgImage = document.createElement("img");  //주석처리 부분은 img 태그로 만들고 싶을 때 사용

//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;
