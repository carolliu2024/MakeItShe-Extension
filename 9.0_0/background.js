var activeTabDomain = false;
var siteStateList =  chrome.storage.local.get('siteStateList')  || {};
// Note: localStorage replaced with chrome.storage.local after upgrading to Manifest v3

// Run when active tab in a window changes (i.e. switch tabs)
chrome.tabs.onActivated.addListener( function ( tab ) {
    // console.log("onActivated?")

    chrome.storage.local.set({'highlighted': 'no'});
    chrome.tabs.sendMessage(tab.tabId, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });


    chrome.tabs.get( tab.tabId, function ( tabInfo ) {

        siteStateList =  chrome.storage.local.get('siteStateList')  || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        chrome.storage.local.set({'activeDomain': activeTabDomain });
        chrome.extension.sendMessage({ event: 'changedDomain', domain: activeTabDomain });
        var activated = siteStateList[ activeTabDomain ] === true;

        if ( activated ) {

            chrome.action.setIcon({ path: "icon_on.png" });

        } else {

            chrome.action.setIcon({ path: "icon_off.png" });

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

    chrome.storage.local.set({'highlighted': 'no'});
    chrome.tabs.sendMessage(tabId, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });
    //alert('changing tab');

    chrome.tabs.get( tabId, function ( tabInfo ) {

        siteStateList =  chrome.storage.local.get('siteStateList')  || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        chrome.storage.local.set( {'activeDomain': activeTabDomain} );
        chrome.extension.sendMessage({ event: 'changedDomain', domain: activeTabDomain });
        var activated = siteStateList[ activeTabDomain ] === true;

        if ( activated ) {

            chrome.action.setIcon({ path: "icon_on.png" });

        } else {

            chrome.action.setIcon({ path: "icon_off.png" });

        }

        chrome.tabs.sendMessage( tabId, {
            from: 'content',
            activate: activated
        });

    });

});


chrome.runtime.onMessage.addListener( function ( msg, sender,sendResponse ) {

});
