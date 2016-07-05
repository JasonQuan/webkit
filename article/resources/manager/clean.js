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
    if (request.event === 'openCleanModel') {
        cleanPage();
    } else if (request.event === 'removeSelect') {
        removeSelect();
    } else {
        console.log(request.event);
    }
});
function removeSelect() {
    $('.cleanContent').each(function () {
        console.log($(this).attr("class"));
    });
}
function cleanPage() {
    $('a').click(function (e) {
        e.preventDefault();
    });
    $('body').children().off();
    $('body *').each(function () {
        $(this).mouseover(function (e) {
            e.stopPropagation();
            $('.overBorder').removeClass("overBorder").unbind('dblclick');
            $(e.target).addClass("overBorder").dblclick(function (e) {
                $(this).addClass('cleanContent').find('.cleanContent').removeClass("cleanContent");
                $(this).parents(".cleanContent").removeClass("cleanContent");
//                $(this).remove();
            });
        });
    });
}
