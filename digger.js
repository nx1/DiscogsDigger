// DiscogsDigger
// https://github.com/nx1/DiscogsDigger
var overlay = document.createElement('div');
var videoId = 'ahvcIxWhM6Y';

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


// add the YouTube video embed to the overlay element
overlay.innerHTML = '<iframe id="player" width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

document.body.appendChild(overlay);


// create the second overlay element
var tracklistOverlay = document.createElement('div');

// set the position of the second overlay element to be absolute
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


function playVideo(event) {
  event.preventDefault();  // Prevents scrolling to top
  var videoId2 = 'gpSz_Ipt5z8';

  // get the iframe element
  var player = document.getElementById('player');
  // update the src attribute of the iframe with the new video ID
  player.src = 'https://www.youtube.com/embed/' + videoId2;
}


function getTracklist(event) {
  event.preventDefault();
//  var url = event.target.href;
  var url = 'https://www.discogs.com/release/154337-Phony-Orphants-vs-Antix-Saturday-Candy-Chicargo-Collins'
  getTracklist(url).then(function(tracklist) {
    var tracklistOverlay = document.getElementById('tracklist-overlay');
    tracklistOverlay.innerHTML = '';
    var ul = document.createElement('ul');
    for (var i = 0; i < tracklist.length; i++) {
      var li = document.createElement('li');
      li.textContent = tracklist[i];
      ul.appendChild(li);
    }
    tracklistOverlay.appendChild(ul);
  });
}


// get all the title elements
var titleElems = document.querySelectorAll('td.title');

// loop through each title element
for (var i = 0; i < titleElems.length; i++) {
  // get all the links inside the title element
  var links = titleElems[i].querySelectorAll('a');

  // loop through each link
  for (var j = 0; j < links.length; j++) {

    // create a new anchor element
    var anchor = document.createElement('a');

    // set the href and text content of the anchor element
    anchor.href = '#';
    anchor.textContent = '[▶]';
    anchor.addEventListener('click', playVideo);
    anchor.addEventListener('click', getTracklist);

    // insert the new anchor element after the link
    links[j].parentNode.insertBefore(anchor, links[j].nextSibling);
  }
}


// Do same for titles in search results
nl = document.querySelectorAll('a.search_result_title') // Node List
for (var i = 0; i<nl.length;i++){
	var anchor = document.createElement('a');
	anchor.href = '#';
    anchor.textContent = '[▶]';

    // add click event listener to the anchor element
    anchor.addEventListener('click', playVideo);
    nl[i].parentNode.insertBefore(anchor, nl[i].nextSibling);

}



