import $ from 'jquery';
console.log('Hello from index.js');

//document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (!tabs || !tabs.length || !tabs[0].url) {
      $('#current-url').text('No active tab');
      return;
    }
    var activeTab = tabs[0];
    var url = activeTab.url;
    $('#current-url').text(url);

    if (url.startsWith('chrome://')) {
        console.log('Cannot access chrome:// URLs');
        return;
    }

    chrome.scripting.executeScript(
      {
        target: { tabId: activeTab.id },
        files: ['activePage.js']
      },
      () => {
        chrome.tabs.sendMessage(activeTab.id, { action: "getPageContent" }, function(response) {
          if (response && response.content) {
            console.log('Page content:', response.content);
          } else {
            console.log('Failed to get page content');
          }
        });
      }
    );
  });
});