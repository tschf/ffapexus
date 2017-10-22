// Firefox 1.0+ test
// InstallTrigger is interface specifically for Firefox. By
// checking if this is available, we can ascertain if we are
// in Firefox. Idea from: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
var isFirefox = typeof InstallTrigger !== 'undefined';

if (isFirefox) {
    // Store the original version of function so that we can re-call in our custom implementation
    var origOpenInNewWindow = apex.navigation.openInNewWindow;
    
    
    apex.navigation.openInNewWindow = function tschfOpenInNewWindow(pURL, pWindowName, pOptions) { 
        var parent = origOpenInNewWindow(pURL, pWindowName, pOptions); 
        parent.alert("Welcome back"); 
    }
}
