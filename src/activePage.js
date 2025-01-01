import $ from 'jquery';
//import Parser from '@postlight/parser';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Received message");
        if (request.action === "getPageContent") {
            console.log("Received getPageContent message");
            //document.documentElement.outerHTML
            //$('body').html()
            //Parser($('body').html()).then(result => {
            //    console.log(result);
            //});
            //sendResponse({ content: $('body').html() });

            // 模擬大量工作，使用 Promise 包裝 setTimeout
            new Promise((resolve) => {
                setTimeout(() => {
                    console.log("5 seconds have passed");
                    resolve($('body').html());
                }, 5000);
            }).then((content) => {
                sendResponse({ content: content });
            });

            return true;
        }
    }
);
