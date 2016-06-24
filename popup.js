function onWindowLoad() {
  chrome.tabs.executeScript(null, {file: "jquery.js"});
  chrome.tabs.executeScript(null, {file: "fbauto.js"});
}

window.onload = onWindowLoad;