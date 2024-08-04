let foundHaiku = "No haiku found.";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.haiku) {
        foundHaiku = message.haiku;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Haiku Finder installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.request === "getHaiku") {
        sendResponse({ haiku: foundHaiku });
    }
});
