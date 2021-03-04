navigator.permissions.query({ name: "clipboard-read"});
navigator.permissions.query({ name: "clipboard-write"});

console.log('ready');

var localclip="";

function insertJs() {
    var jsToInsert = document.createElement("script");
    jsToInsert.src=chrome.extension.getURL('Injected.js');
    let html=document.getElementsByTagName('html')[0];
    html.appendChild(jsToInsert);
}

insertJs();

function copyClipboardBg(text) {
    console.log('BG copy text to Clipboard:', text);
    window.navigator.clipboard.writeText(text);

    if(localclip!==text) {
        localclip=text;
    }
}

function onClipboardMessageBg(event) {
    let data = event.data;
    switch(data.action) {
        case 'copyClipboard':
            copyClipboardBg(data.data);
    }
}


async function readFromClipboard() {
  if(window.navigator.clipboard === undefined) {
      return
  }

  try {
    const text = await window.navigator.clipboard.readText();

    if(localclip!==text) {
        console.log('clipboard has changed:',text);
        localclip=text;

        window.postMessage({action: 'pastClipboard', data: text});
    }
    
    // console.log(text);
  } catch (error) {
    console.log(error);
  }
}

setInterval(readFromClipboard, 1000);

window.addEventListener('message', onClipboardMessageBg, false);
