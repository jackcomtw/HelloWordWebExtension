//import $ from 'jquery';
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "getPageContent") {
            //document.documentElement.outerHTML
            //$('body').html()
            sendResponse({ content: document.documentElement.outerHTML });
        }
    });
