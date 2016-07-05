/* global chrome */

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.event === 'openCleanModel') {
        cleanPage();
    } else {
        console.log(request.event);
    }
});

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
                $(this).remove();
            });
        });
    });
}
