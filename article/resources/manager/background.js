/* global chrome */

var print_action_url = "javascript:window.print();";
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});

function cleanModel(info, tab) {
    chrome.tabs.sendMessage(tab.id, {event: 'openCleanModel'}, function (response) {
        //console.log(response);
    });
    //TODO: remove clean button
    chrome.contextMenus.remove(info.menuItemId);
    chrome.contextMenus.create({
        "title": '清理已选',
        "contexts": ['all'],
        "onclick": removeSelect
    });
}

function removeSelect(info, tab) {
    chrome.tabs.sendMessage(tab.id, {event: 'removeSelect'}, function (response) {
        console.log(response);
        //TODO: remove clean button
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

