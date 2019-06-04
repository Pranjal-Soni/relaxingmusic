
var myAudio = new Audio('https://cdn.glitch.com/75c2508d-4fa5-4dd7-8fc5-789f5da3773d%2Fchill.mp3?1539433208965');
var calmAudio = new Audio('https://cdn.glitch.com/75c2508d-4fa5-4dd7-8fc5-789f5da3773d%2Fcalm.mp3?1539433227997')
var relaxAudio = new Audio('https://cdn.glitch.com/75c2508d-4fa5-4dd7-8fc5-789f5da3773d%2Frelax.mp3?1539433229895');
var rainAudio = new Audio('https://cdn.glitch.com/75c2508d-4fa5-4dd7-8fc5-789f5da3773d%2Frain.mp3?1539433224601');
var oceanAudio = new Audio('https://cdn.glitch.com/75c2508d-4fa5-4dd7-8fc5-789f5da3773d%2Focean.mp3?1539433221131');
var pianoAudio = new Audio('https://cdn.glitch.com/75c2508d-4fa5-4dd7-8fc5-789f5da3773d%2Fpiano.mp3?1539433373164');

function playAudio(){
	if(myAudio.paused){
		rainAudio.pause();
		document.getElementById("rain").innerHTML = "Start";
		oceanAudio.pause();
		document.getElementById("ocean").innerHTML = "Start";
		pianoAudio.pause();
		document.getElementById("piano").innerHTML = "Start";
		calmAudio.pause();
		document.getElementById("calm").innerHTML = "Start";
		relaxAudio.pause();
		document.getElementById("relax").innerHTML = "Start";
		myAudio.currentTime = 0;
		myAudio.play();
		myAudio.loop = true;
		document.getElementById("chill").innerHTML = "Stop";
	}else{
		myAudio.pause();
		document.getElementById("chill").innerHTML = "Start";
	}
}

function playAudioCalm(){
	if(calmAudio.paused){
		rainAudio.pause();
		document.getElementById("rain").innerHTML = "Start";
		oceanAudio.pause();
		document.getElementById("ocean").innerHTML = "Start";
		pianoAudio.pause();
		document.getElementById("piano").innerHTML = "Start";
		myAudio.pause();
		document.getElementById("chill").innerHTML = "Start";
		relaxAudio.pause();
		document.getElementById("relax").innerHTML = "Start";
		calmAudio.currentTime = 0;
		calmAudio.play();
		calmAudio.loop = true;
		document.getElementById("calm").innerHTML = "Stop";
	}else{
		calmAudio.pause();
		document.getElementById("calm").innerHTML = "Start";
	}
}

function playAudioRelax(){
	if(relaxAudio.paused){
		rainAudio.pause();
		document.getElementById("rain").innerHTML = "Start";
		oceanAudio.pause();
		document.getElementById("ocean").innerHTML = "Start";
		pianoAudio.pause();
		document.getElementById("piano").innerHTML = "Start";
		myAudio.pause();
		document.getElementById("chill").innerHTML = "Start";
		calmAudio.pause();
		document.getElementById("calm").innerHTML = "Start";
		relaxAudio.currentTime = 0;
		relaxAudio.play();
		relaxAudio.loop = true;
		document.getElementById("relax").innerHTML = "Stop";
	}else{
		relaxAudio.pause();
		document.getElementById("relax").innerHTML = "Start";
}
}

function playAudioRain(){
	if(rainAudio.paused){
		relaxAudio.pause();
		document.getElementById("relax").innerHTML = "Start";
		oceanAudio.pause();
		document.getElementById("ocean").innerHTML = "Start";
		pianoAudio.pause();
		document.getElementById("piano").innerHTML = "Start";
		myAudio.pause();
		document.getElementById("chill").innerHTML = "Start";
		calmAudio.pause();
		document.getElementById("calm").innerHTML = "Start";
		rainAudio.currentTime = 0;
		rainAudio.play();
		rainAudio.loop = true;
		document.getElementById("rain").innerHTML = "Stop";
	}else{
		rainAudio.pause();
		document.getElementById("rain").innerHTML = "Start";
}
}

function playAudioOcean(){
	if(oceanAudio.paused){
		relaxAudio.pause();
		document.getElementById("relax").innerHTML = "Start";
		rainAudio.pause();
		document.getElementById("rain").innerHTML = "Start";
		pianoAudio.pause();
		document.getElementById("piano").innerHTML = "Start";
		myAudio.pause();
		document.getElementById("chill").innerHTML = "Start";
		calmAudio.pause();
		document.getElementById("calm").innerHTML = "Start";
		oceanAudio.currentTime = 0;
		oceanAudio.play();
		oceanAudio.loop = true;
		document.getElementById("ocean").innerHTML = "Stop";
	}else{
		oceanAudio.pause();
		document.getElementById("ocean").innerHTML = "Start";
}
}

function playAudioPiano(){
	if(pianoAudio.paused){
		relaxAudio.pause();
		document.getElementById("relax").innerHTML = "Start";
		rainAudio.pause();
		document.getElementById("rain").innerHTML = "Start";
		oceanAudio.pause();
		document.getElementById("ocean").innerHTML = "Start";
		myAudio.pause();
		document.getElementById("chill").innerHTML = "Start";
		calmAudio.pause();
		document.getElementById("calm").innerHTML = "Start";
		pianoAudio.currentTime = 0;
		pianoAudio.play();
		pianoAudio.loop = true;
		document.getElementById("piano").innerHTML = "Stop";
	}else{
		pianoAudio.pause();
		document.getElementById("piano").innerHTML = "Start";
}
}
