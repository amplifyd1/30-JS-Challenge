const player = document.QuerySelector('.player');
const video = player.QuerySelector('.viewer');
const progress = player.QuerySelector('.progress');
const progressBar = player.QuerySelector('.progress__filled');
const toggle = player.QuerySelector('.toggle')
const skipButtons = player.QuerySelectorAll('[data-skip]')
const ranges = player.QuerySelectorAll('.player__slider')


function togglePlay(){
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(){
  const icon =  this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toogle.addEventListener('click', tooglePlay);
