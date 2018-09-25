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
video.addEventListener('click', tooglePlay);
toogle.addEventListener('click', tooglePlay);
