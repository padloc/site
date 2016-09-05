(function() {
    function getPlatform() {
        var isIOS = function() {
            return /ipad|iphone|ipod/i.test(navigator.platform);
        };

        var isAndroid = function() {
            return /android/i.test(navigator.userAgent);
        };

        var platform = "other";
        if (isIOS()) {
            platform = "ios";
        } else if (isAndroid()) {
            platform = "android";
        }
        return platform;
    }

    function setupDownloadButton() {
        var downloadUrls = {
            "ios": "https://itunes.apple.com/app/id871710139",
            "android": "https://play.google.com/store/apps/details?id=com.maklesoft.padlock",
            "chrome": "https://chrome.google.com/webstore/detail/padlock/npkoefjfcjbknoeadfkbcdpbapaamcif"
        };

        var buttonCaptions = {
            "ios": "Available on the App Store",
            "android": "Available on Google Play",
            "chrome": "Add to Chrome"
        };

        var button = document.getElementById("downloadButton");
        var platform = getPlatform();
        platform = platform == "other" ? "chrome" : platform;

        button.innerHTML = buttonCaptions[platform];
        button.href = downloadUrls[platform];
        button.setAttribute("data-platform", platform);

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

    setupDownloadButton();
})();
