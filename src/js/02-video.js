import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));
function onTimeupdate(evt) {
  const time = evt.seconds;
  console.log(time);
  localStorage.setItem(LOCALSTORAGE_KEY, time);
}

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(savedTime);
player.setCurrentTime(savedTime);
