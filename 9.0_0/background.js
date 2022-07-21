var activeTabDomain = false;
var siteStateList =  chrome.storage.local.get('siteStateList')  || {};

chrome.tabs.onActivated.addListener( function ( tab ) {

    chrome.storage.local.set('highlighted', 'no');
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });


    chrome.tabs.get( tab.tabId, function ( tabInfo ) {

        siteStateList =  chrome.storage.local.get('siteStateList')  || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        chrome.storage.local.set( 'activeDomain', activeTabDomain );
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

chrome.tabs.onUpdated.addListener( function ( tabId ) {

    chrome.storage.local.set('highlighted', 'no');
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });
    //alert('changing tab');

    chrome.tabs.get( tabId, function ( tabInfo ) {

        siteStateList =  chrome.storage.local.get('siteStateList')  || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        chrome.storage.local.set( 'activeDomain', activeTabDomain );
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

//

chrome.runtime.onMessage.addListener( function ( msg, sender,sendResponse ) {

});
