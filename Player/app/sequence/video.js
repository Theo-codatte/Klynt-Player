/**
 * Copyright 2013, Honkytonk Films
 * Licensed under GNU GPL
 * http://www.klynt.net
 */
 
function addVideo(data) {
	var videoHTML = getMediaHTML('video', data);
	
	var videoDiv = addElement(data, {
		name: 'video',
		className: 'videoClass',
		onBeginLeft: data.autoplay ? "playMedia('" + data.id + "');" : "",
		onBeginRight: "setMediaVolume('" + data.id + "', " + data.volume + ");" + "showMedia('" + data.id + "');",
		onEndLeft: "pauseMedia('" + data.id + "');",
		onEndRight: "hideMedia('" + data.id + "');"
	});
	
	videoDiv.innerHTML = videoHTML;
}