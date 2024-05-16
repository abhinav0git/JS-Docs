const secHand = document.querySelector('.second-hand');
const hrHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

  function setdate () {
    const nn = new Date();
    const sec = nn.getSeconds();
    const min = nn.getMinutes();
    const hr = nn.getHours();

    const secDeg = ((sec*360)/60)+90;
    const minDeg = ((min*360)/60)+90;
    const hrDeg = ((hr*360)/12)+90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
  }

setInterval(setdate, 1000);