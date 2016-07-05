/* global chrome */

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: 'window.print();'
    });
});

function cleanModel(info, tab) {
    chrome.tabs.sendMessage(tab.id, {event: 'openCleanModel'}, function (response) {
    });
}

var contexts = ["all"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    chrome.contextMenus.create({
        "title": '清理模式',
        "contexts": [context],
        "onclick": cleanModel
    });
}

