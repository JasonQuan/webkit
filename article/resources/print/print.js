/* global chrome */
window.addEventListener("load", loadCss, false);
function loadCss() {
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: "http://ext.primefaces.cn/print.css"}).appendTo("head");
}
function hello() {
    console.log('test' + $('head').text());
    window.print();
}
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.greeting);
    hello();
});
