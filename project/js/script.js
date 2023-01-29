const PLAY = document.querySelector('.about__play');
const VIDEO = document.querySelector('.about__video video');

PLAY.addEventListener('click', () => {
	VIDEO.play()
	VIDEO.setAttribute('controls', 'controls')
	PLAY.classList.add('about__video-hidden')
});
