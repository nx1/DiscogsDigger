async function getTracklist(url) {
	const response = await fetch(url);
	const html = await response.text();
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');
	const tracklistRows = doc.querySelectorAll('tr[data-track-position]');
	const tracklist = [];
	for (const row of tracklistRows) {
	  const trackTitle = row.querySelector('.trackTitle_CTKp4').textContent.trim();
	  tracklist.push(trackTitle);
	}
	return tracklist;
}
