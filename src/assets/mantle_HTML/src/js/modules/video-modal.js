let $ = require('jquery');
window.jQuery = $;
window.$ = $;
require('../vendor/fitVids');

// Video Modal
const playVideo = document.querySelector('.play-video button');
const videoOverlay = document.querySelector('#video-modal');
const iframe = videoOverlay.querySelector('iframe');
if(playVideo && videoOverlay){
	playVideo.addEventListener('click', launchVideo);
	videoOverlay.addEventListener('click', closeVideo);
}

function launchVideo(e){
	let url = this.dataset.url;
	if(url){
		videoOverlay.classList.add('active');
		iframe.src = url;
		$(videoOverlay).fitVids();
		setTimeout(function(){
			videoOverlay.focus();
			videoOverlay.querySelector('.close').classList.add('active');
		}, 150);
	}
}


function closeVideo(e){
	videoOverlay.querySelector('.close').classList.remove('active');
	setTimeout(function(){
		videoOverlay.classList.remove('active');
		setTimeout(function(){
			playVideo.focus();
			iframe.src = '';
		}, 250);
	}, 250);
}
