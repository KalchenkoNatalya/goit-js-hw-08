{
  /* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe> */
}

{
  /* <script src="https://player.vimeo.com/api/player.js"></script> */
}
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);
// const player = new Vimeo.Player(iframe);

player.on('play', function (e) {
  console.dir(e);
});
// player.on('ended', function() {
//     console.log('ended the video!');
// });
const LOCALSTORAGE_KEY = "videoplayer-current-time";
player.on('timeupdate', function (e) {
  const time = e.seconds;
  console.log(time);
  localStorage.setItem(LOCALSTORAGE_KEY, time);
});


// player.on('timeupdate', function ({seconds}) {
//   setItem("videoplayer-current-time", seconds)
//   })
//  )
//  setInterval(function () {

//     player.getCurrentTime().then(function(seconds) {
   
//         console.log( seconds, "current seconds " );

//     });
//         console.log('it works' + new Date());
// },1000);


// player.on('timeupdate', function(data) {
//     console.log('Percentage watched: '+data.seconds);
//     if (data.seconds == 3.106) {
//         console.log('3 sec of video watched');
//      }
// });
// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

//  require(['https://player.vimeo.com/api/player.js'], function (Player) {
//         const iframe = document.querySelector('iframe');
//         const player = new Player(iframe);

//         player.on('play', function() {
//             console.log('played the video!');
//         });
//     });
