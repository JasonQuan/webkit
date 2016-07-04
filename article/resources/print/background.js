/* global chrome */

var print_action_url = "javascript:window.print();";
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
    //  chrome.tabs.update(tab.id, {url: action_url});
});

function clickPrint(info, tab) {
    chrome.tabs.sendMessage(tab.id, {}, function (response) {
        console.log(response);
    });
    

    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab.id));
}


var contexts = ["all"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    chrome.contextMenus.create({type:'separator'});
    var id = chrome.contextMenus.create({
        "title": "Focus Print",
        "contexts": [context],
        "onclick": clickPrint
    });
//    var id = chrome.contextMenus.create({
//        "title": "导出EPUB",
//        "contexts": [context],
//        "onclick": clickPrint
//    });
//    var id = chrome.contextMenus.create({
//        "title": "收 藏",
//        "contexts": [context],
//        "onclick": clickPrint
//    });
}

