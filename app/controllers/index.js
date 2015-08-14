var idiota = Ti.Media.createSound({
	url:"/sounds/idiota.mp3",
	preload: true
});
	
var idiota2 = Ti.Media.createSound({
	url:"/sounds/idiota.mp3",
	preload: true
});

var callate = Ti.Media.createSound({
	url:"/sounds/callate.mp3",
	preload: true
});
	
var callate2 = Ti.Media.createSound({
	url:"/sounds/callate.mp3",
	preload: true
});

var veteAlDiablo = Ti.Media.createSound({
	url:"/sounds/vetealdiablo.mp3",
	preload: true
});
	
var veteAlDiablo2 = Ti.Media.createSound({
	url:"/sounds/vetealdiablo.mp3",
	preload: true
});

var tagueno = Ti.Media.createSound({
	url:"/sounds/tagueno.aac",
	preload: true
});
	
var tagueno2 = Ti.Media.createSound({
	url:"/sounds/tagueno.aac",
	preload: true
});

$.idiotaButton.addEventListener("click", function(){
	if (idiota.playing){
		idiota2.play();
	}
	else{
		idiota.play();
	}
});

$.callateButton.addEventListener("click", function(){
	if (callate.playing){
		callate2.play();
	}
	else{
		callate.play();
	}
});

$.veteAlDiabloButton.addEventListener("click", function(){
	if (veteAlDiablo.playing){
		veteAlDiablo2.play();
	}
	else{
		veteAlDiablo.play();
	}
});

$.taguenoButton.addEventListener("click", function(){
	if (tagueno.playing){
		tagueno2.play();
	}
	else{
		tagueno.play();
	}
});


$.index.open();
