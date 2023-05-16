// DiscogsDigger
// https://github.com/nx1/DiscogsDigger
// Your API Key goes here, generate one at:
// https://www.discogs.com/settings/developers
const apiKey = "xGVjKnQznJbDOoNtOCdmSDLBeaWiehqigqeOSBdp"; 


// Video Overlay
var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.bottom = '20px';
overlay.style.right = '20px';
overlay.style.width = '200px';
overlay.style.height = '150px';
overlay.style.backgroundColor = '#fff';
overlay.style.padding = '5px';
overlay.style.borderRadius = '2px';
overlay.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
overlay.style.zIndex = '9999';

var videoId = 'ahvcIxWhM6Y';

overlay.innerHTML = '<iframe id="player" width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

document.body.appendChild(overlay);

// Tracklist Overlay
var tracklistOverlay = document.createElement('div');
tracklistOverlay.style.position = 'absolute';
tracklistOverlay.style.backgroundColor = '#fff';
tracklistOverlay.style.borderRadius = '2px';
tracklistOverlay.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
tracklistOverlay.style.top = '-100px';
tracklistOverlay.style.left = '0px';
tracklistOverlay.style.zIndex = '10000';
tracklistOverlay.style.width = '210px';
tracklistOverlay.style.height = '90px';
tracklistOverlay.style.overflow = 'scroll';
tracklistOverlay.style.overflowY = 'scroll';
tracklistOverlay.innerHTML = '<ul><li>Song 1</li><li>Song 2</li><li>Song 3</li> <li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 1</li><li>Song 2</li><li>Song 3</li>  </ul>';
overlay.appendChild(tracklistOverlay);


// Extract the releaseID from url
function extractReleaseId(url) {
  const pattern = /\/(\d+)-/; 
  const matches = url.match(pattern);
  return matches ? matches[1] : null;
}

// Extract the videoID from url
function extractVideoId(link){
  const url = new URL(link);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get('v');
}


function playVideo(event, videoId) {
  event.preventDefault();  // Prevents scrolling to top
  var player = document.getElementById('player');
  player.src = 'https://www.youtube.com/embed/' + videoId;
}

var foundLinks = document.querySelectorAll('td.title a, a.search_result_title');
for (var i = 0; i < foundLinks.length; i++) {
  var anchor = document.createElement('a');
  var videoId = 'gpSz_Ipt5z8';
  anchor.href = '#';
  anchor.textContent = '[▶]';
  anchor.addEventListener('click', function(event) {
     playVideo(event, videoId);
     //getTracklist(event);
  });
  foundLinks[i].parentNode.insertBefore(anchor, foundLinks[i].nextSibling);
}
