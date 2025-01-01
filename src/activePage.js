import $ from 'jquery';
import Parser from '@postlight/parser';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Received message");
        if (request.action === "getPageContent") {
            console.log("Received getPageContent message");
            console.log(request.url);
            // 模擬大量工作，使用 Promise 包裝 setTimeout
            // new Promise((resolve) => {
            //     setTimeout(() => {
            //         console.log("5 seconds have passed");
            //         //resolve($('body').html());
            //         resolve(request.url);
            //     }, 5000);
            // }).then((content) => {
            //     sendResponse({ content: content });
            // });
            // 使用 Parser 解析頁面內容
            Parser.parse(request.url, {
                content: $('body').html()
            }).then(result => {
                sendResponse({ content: result });
            }).catch(error => {
                console.error(error);
                sendResponse({ error: error.message });
            });            

            return true;
        }
    }
);
