/* global chrome */

var print_action_url = "javascript:window.print();";
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});

function cleanModel(info, tab) {
    chrome.tabs.sendMessage(tab.id, {info:info}, function (response) {
        console.log(response);
    });
}

// Create one test item for each context type.
var contexts = ["all"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    chrome.contextMenus.create({
        "title": '清理模式',
        "contexts": [context],
        "onclick": cleanModel
    });
}

