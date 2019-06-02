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

	/* Voice Recognition */
	let voiceRecognitionElement = document.getElementById("voice-recognition-element");
	let voiceRecognitionStart = document.getElementById("voice-recognition-start");
	let voiceRecognitionStop = document.getElementById("voice-recognition-stop");
	let voiceRecognitionOutput = document.getElementById("voice-recognition-output");
	let voiceRecognitionText = "";

	voiceRecognitionStart.addEventListener("click", function(event) {
		event.preventDefault();

		voiceRecognitionElement.start();
	});

	voiceRecognitionElement.addEventListener("result", function(event) {
		voiceRecognitionText = event.detail.result;
	});

	voiceRecognitionStop.addEventListener("click", function(event) {
		event.preventDefault();

		voiceRecognitionElement.stop();
	});

	voiceRecognitionElement.addEventListener("end", function(event) { 
		voiceRecognitionOutput.textContent = voiceRecognitionText;
	});
}());