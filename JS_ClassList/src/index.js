import "./styles.css";

const body = document.body;
const SmallScreen = "smallScreen";
const MediumScreen = "mediumScreen";
const BigScreen = "bigScreen";

function windowSize() {
  if (window.innerWidth >= 0 && window.innerWidth < 500) {
    body.classList.add(SmallScreen);
    body.classList.remove(MediumScreen);
  } else if (window.innerWidth >= 500 && window.innerWidth < 1000) {
    body.classList.add(MediumScreen);
    body.classList.remove(SmallScreen, BigScreen);
  } else if (window.innerWidth >= 1000) {
    body.classList.add(BigScreen);
    body.classList.remove(MediumScreen);
  }
}
window.addEventListener("resize", windowSize);
