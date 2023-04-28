import { apiKey } from './config.js';
const releaseId = 155124; // Replace with the ID of the release you want to get details for

const headers = {
  "Authorization": `Discogs token=${apiKey}`
};

fetch(`https://api.discogs.com/releases/${releaseId}`, { headers })
  .then(response => response.json())
  .then(data => {
    // Handle the data returned from the API here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
