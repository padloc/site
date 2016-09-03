window.onload = function() {
    mixpanel.track_links(".source-link", "open source");
    mixpanel.track_links(".download-link", "open chrome");
    mixpanel.track_links(".maklesoft-link", "open maklesoft website");
    mixpanel.track_forms("#mc-embedded-subscribe-form", "subscribe to newsletter");

    var iDevices = ["iPad", "iPhone", "iPod"];
    function isIOS() {
        return iDevices.reduce(function(match, dev) {
            return match || navigator.platform.indexOf(dev) !== -1;
        }, false);
    };

    function isAndroid() {
        return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    }

    var downloadUrls = {
        "ios": "https://itunes.apple.com/app/id871710139",
        "android": "https://play.google.com/store/apps/details?id=com.maklesoft.padlock",
        "other": "https://chrome.google.com/webstore/detail/padlock/npkoefjfcjbknoeadfkbcdpbapaamcif"
    };

    var buttonCaptions = {
        "ios": "Available on the App Store",
        "android": "Available on Google Play",
        "other": "Add to Chrome"
    };

    var platform = "other";
    if (isIOS()) {
        platform = "ios";
    } else if (isAndroid()) {
        platform = "android";
    }

    var button = document.getElementById("downloadButton");

    button.innerHTML = buttonCaptions[platform];
    button.href = downloadUrls[platform];
    document.body.classList.add(platform);

    var previewEl = document.querySelector(".preview");
    var previewButton = document.querySelector(".preview-button");
    var previewCloseButton = document.querySelector(".preview .close-button");
    var iframe = previewEl.querySelector("iframe");

    previewButton.addEventListener("click", function() {
        previewEl.style.display = "block";
        iframe.src = "https://player.vimeo.com/video/139904442?autoplay=1";
    });

    previewCloseButton.addEventListener("click", function() {
        previewEl.style.display = "";
        iframe.src = "";
    });
}
