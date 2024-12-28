import $ from 'jquery';
//import Parser from '@postlight/parser';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "getPageContent") {
            //document.documentElement.outerHTML
            //$('body').html()
            //Parser($('body').html()).then(result => {
            //    console.log(result);
            //});
            //sendResponse({ content: $('body').html() });
            //請幫我把下面程式改成 非同步
            //從這裡開始            
            console.log("A");
            try {
                console.log("B");
                //const result = Parser($('body').html());
                console.log(result);
                console.log("C");
                //到這裡結束
                sendResponse({ content: "OK" });
            } catch (error) {
                console.log(error);
                sendResponse({ content: "Error" });
            }
            //到這裡結束
        }
        return true;
    });
