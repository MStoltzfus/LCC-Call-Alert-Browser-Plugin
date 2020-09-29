//chrome.runtime.sendmessage()

var callAlert = document.getElementsByClassName('toast-alert');

if(typeof(callAlert) != 'undefined' && callAlert !=null){
    chrome.tabs.sendMessage(tab.id, msg);
}
