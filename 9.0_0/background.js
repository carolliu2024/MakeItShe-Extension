var activeTabDomain = false;
var siteStateList =  chrome.storage.sync.get('siteStateList')  || {};
// Note: localStorage replaced with chrome.storage.sync after upgrading to Manifest v3

// Run when active tab in a window changes (i.e. switch tabs)
chrome.tabs.onActivated.addListener( function ( tab ) {

    chrome.storage.sync.set({'highlighted': 'no'});
    chrome.tabs.sendMessage(tab.tabId, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });


    chrome.tabs.get( tab.tabId, function ( tabInfo ) {

        siteStateList =  chrome.storage.sync.get('siteStateList')  || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        chrome.storage.sync.set({'activeDomain': activeTabDomain });
        chrome.runtime.sendMessage({ event: 'changedDomain', domain: activeTabDomain });
        // var activated = siteStateList[ activeTabDomain ] === true;
        chrome.storage.sync.get('on', obj => {
            var activated = obj.on;
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

});

// When tab is updated (URL changes?)
chrome.tabs.onUpdated.addListener( function ( tabId ) {

    chrome.storage.sync.set({'highlighted': 'no'});
    chrome.tabs.sendMessage(tabId, {greeting: "nohighlighting"}, function(response) {
      console.log(response.farewell);
      });
    //alert('changing tab');

    chrome.tabs.get( tabId, function ( tabInfo ) {
        console.log("tabInfo: ", tabInfo);

        siteStateList =  chrome.storage.sync.get('siteStateList')  || {};
        activeTabDomain = tabInfo.url.split('//')[1].split('/')[0];
        chrome.storage.sync.set( {'activeDomain': activeTabDomain} );
        chrome.runtime.sendMessage({ event: 'changedDomain', domain: activeTabDomain });
        // var activated = siteStateList[ activeTabDomain ] === true;
        chrome.storage.sync.get('on', obj => {
            var activated = obj.on;
            // console.log("activated: ", activated);
            if ( activated ) {

                chrome.action.setIcon({ path: "icon_on.png" });
                $('#on-off').switchButton({ checked: true, labels_placement: "left" });
    
            } else {
    
                chrome.action.setIcon({ path: "icon_off.png" });
                $('#on-off').switchButton({ checked: false, labels_placement: "left" });
    
            }
    
            chrome.tabs.sendMessage( tabInfo, {
                from: 'content',
                activate: activated
            });
        });

    });

});


chrome.runtime.onMessage.addListener( function ( msg, sender,sendResponse ) {

});
