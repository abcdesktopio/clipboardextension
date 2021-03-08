console.log('desktop clipboard extension init');

var localclip="";

function pastClipboard(text) {
	if(window.od.broadway.isConnected() === true) {
		window.od.broadway.syncClipBoardtoAbcDesktop(text);
		localclip=text;
	}
}

function onClipboardMessage(event) {
	let data = event.data;
	switch(data.action) {
		case 'pastClipboard':
			pastClipboard(data.data);
	}
}

window.addEventListener('message', onClipboardMessage, false);
