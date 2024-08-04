document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ request: "getHaiku" }, function(response) {
        document.getElementById('haiku').innerText = response.haiku;
    });
});
