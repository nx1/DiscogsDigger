const apiKey = "xGVjKnQznJbDOoNtOCdmSDLBeaWiehqigqeOSBdp"; 
const releaseId = 155124; 


function extractVideoId(link){
  const url = new URL(link);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get('v');
}

const trackTitles = [];
const videoURLs = [];

const headers = {
  "Authorization": `Discogs token=${apiKey}`
};

fetch(`https://api.discogs.com/releases/${releaseId}`, { headers })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //console.log(data['videos']);
    //console.log(data['tracklist']);
    data['videos'].forEach(video => {
      videoURLs.push(extractVideoId(video.uri));
    });
    data['tracklist'].forEach(track => {
      trackTitles.push(track.title);
      //console.log(track.title);
    });
  console.log(trackTitles);
  console.log(videoURLs);
  })
  .catch(error => {
    console.error(error);
  });


