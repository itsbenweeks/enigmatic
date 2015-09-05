var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  enigma = new YT.Player(
    'enigma', {
      height: '30',
      playerVars: {
        'autoplay': 1,
        'controls': 1,
        'autohide':1,
        'wmode':'opaque'
        },
      videoId: 'R8iwzojMkIs',
      events: {
        'onReady': onEnigmaReady,
        'onStateChange': copyStates
        }
      }
    );
  player = new YT.Player(
    'player', {
      playerVars: {
        'autoplay': 1,
        'controls': 1,
        'autohide':1,
        'wmode':'opaque'
        },
      videoId: 'ozoTzkCeO-A',
      events: {
        'onReady': onPlayerReady
        }
      }
    );
  }
function onPlayerReady(event) {
  event.target.mute();
}

function copyStates(event) {
  if (event.data == 0)
    stopAll(event);
  elseif (event.data == 1)
    playAll(event);
  elseif (event.data == 2)
    pauseAll(event);
  // else
  //   pauseOther(event);

}

function stopAll(event){

}

function playAll(event){

}

function pauseAll(event){

}

function pauseOther(event){

}

function onEnigmaReady(event) {
  event.target.unmute();
}
