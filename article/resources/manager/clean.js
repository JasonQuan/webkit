/* global chrome */
window.addEventListener("load", loadCss, false);
/**
 * testdblclick
 */
function testdblclick() {
    alert(this);
}
function loadCss() {
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: "http://ext.primefaces.cn/print.css"}).appendTo("head");
}
function hello() {
    console.log('test' + $('head').text());
    window.print();
}
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    cleanPage();
});

function cleanPage() {
    $('a').click(function (e) {
        e.preventDefault();
    });
    $('body').children().off();
    $('div,span,button,link,a,img').each(function () {
        $(this).mouseover(function (e) {
            e.stopPropagation();
            $('.overBorder').removeClass("overBorder").unbind('dblclick');
            $(e.target).addClass("overBorder").dblclick(function (e) {
                $(this).addClass('cleanContent');
//                $(this).remove();
            });
        });
    });
}
