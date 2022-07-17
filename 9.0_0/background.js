
var activeTabDomain = false;
var siteStateList = JSON.parse( localStorage.getItem('siteStateList') ) || {};

// Run when active tab in a window changes (i.e. switch tabs)
chrome.tabs.onActivated.addListener( function ( tab ) {
    // console.log("onActivated?")

    localStorage.setItem('highlighted', 'no');
    chrome.tabs.sendMessage(tab.tabId, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });


    chrome.tabs.get( tab.tabId, function ( tabInfo ) {

        siteStateList = JSON.parse( localStorage.getItem('siteStateList') ) || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        localStorage.setItem( 'activeDomain', activeTabDomain );
        chrome.extension.sendMessage({ event: 'changedDomain', domain: activeTabDomain });
        var activated = siteStateList[ activeTabDomain ] === true;

        if ( activated ) {

            chrome.browserAction.setIcon({ path: "icon_on.png" });

        } else {

            chrome.browserAction.setIcon({ path: "icon_off.png" });

        }

        chrome.tabs.sendMessage( tab.tabId, {
            from: 'content',
            activate: activated
        });

    });

});

// When tab is updated (URL changes?)
chrome.tabs.onUpdated.addListener( function ( tabId ) {
    // console.log("onUpdated?")

    localStorage.setItem('highlighted', 'no');
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });
    //alert('changing tab');

    chrome.tabs.get( tabId, function ( tabInfo ) {

        siteStateList = JSON.parse( localStorage.getItem('siteStateList') ) || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        localStorage.setItem( 'activeDomain', activeTabDomain );
        chrome.extension.sendMessage({ event: 'changedDomain', domain: activeTabDomain });
        var activated = siteStateList[ activeTabDomain ] === true;

        if ( activated ) {

            chrome.browserAction.setIcon({ path: "icon_on.png" });

        } else {

            chrome.browserAction.setIcon({ path: "icon_off.png" });

        }

        chrome.tabs.sendMessage( tabId, {
            from: 'content',
            activate: activated
        });

    });

});


chrome.runtime.onMessage.addListener( function ( msg, sender,sendResponse ) {

});
