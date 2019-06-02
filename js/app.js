(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	/* Voice speech */
	let voicePlayerSubmit = document.getElementById("voice-player-submit");
	voicePlayerSubmit.addEventListener("click", function(event) {
		event.preventDefault();

		document.getElementById("voice-player-component").speak();
	});
}());