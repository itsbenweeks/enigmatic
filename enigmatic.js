var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  enigma = new YT.Player(
    'enigma', {
      playerVars: {
        'autoplay': 1,
        'controls': 1,
        'autohide':1,
        'wmode':'opaque'
        },
      videoId: 'R8iwzojMkIs',
      events: {
        'onReady': onEnigmaReady
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
function onEnigmaReady(event) {
  event.target.unmute();
  }
