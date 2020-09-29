//chrome.runtime.sendmessage()

var callAlert = document.getElementsByClassName('toast-alert');

if(typeof(callAlert) != 'undefined' && alert !=null){
    chrome.tabs.sendMessage(tab.id, msg);
}
