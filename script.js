function playSound(genre){
	SC.get('/tracks', {
		genres: genre,
		bpm: {from:100}
	}, function(tracks){
		var random = Math.floor(Math.ramdom()*49);
		SC.oEmbed(tracks[random].uri, {auto_play: true}, 
		document.getElementByID('target'))
	});
}

window.onload = function(){
	SC.initialize({
		client_id: 'b3c7752796d119ced339823e5404671d'
	});
	
	var menuLinks = "Dubstep";
	playSomeSound('Rock');
	
};