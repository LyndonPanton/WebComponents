(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	/* Voice speech */
	let voicePlayerSubmit = document.getElementById("voice-player-submit");
	let voicePlayerText = document.getElementById("voice-player-text");

	voicePlayerText.addEventListener("input", function(event) {
		document.getElementById("voice-player-component").setAttribute("text", event.target.value);
	});

	voicePlayerSubmit.addEventListener("click", function(event) {
		event.preventDefault();

		document.getElementById("voice-player-component").speak();
	});
}());