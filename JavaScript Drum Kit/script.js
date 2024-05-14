//default background image
// document.body.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp1951951.jpg)';

// fetching image from pexels api as a background image
const apikey = process.env.API_KEY;
fetch('https://api.pexels.com/v1/search?query=drums&per_page=1', {
  headers: {
    'Authorization': apikey,
  }
})
.then(response => response.json())
.then(data => { 
    console.log(data.photos[0].url)
    const photoUrl = data.photos[0].url;
    document.body.style.backgroundImage = 'url(${photoUrl})';
})
.catch(error => console.log('error', error));


// drum kit functionality (sounds)

function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if(!audio) return; //stops the function from running alltogether

        audio.currentTime = 0; //rewind to start
        audio.play();
        key.classList.add('playing'); //transition css
}


// animation

function removeTransition (e) {
        if(e.propertyName != 'transform')
        return;
        this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(kk => kk.addEventListener('transitionend', removeTransition) );

window.addEventListener('keydown', playSound);

require('dotenv').config();
