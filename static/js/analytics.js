window.onload = function() {
    if (typeof mixpanel === "undefined") {
        return;
    }
    // Calculate page load metrics
    var t = window.performance && window.performance.timing,
        latency = t ? t.responseEnd - t.fetchStart : "N/A",
        renderingTime = t ? t.loadEventStart - t.responseEnd : "N/A";

    mixpanel.register_once({
        referrer: document.referrer
    });

    // Setup mixpanel tracking
    mixpanel.track("load page", {
        latency: latency,
        rendering_time: renderingTime
    });
    mixpanel.track_links("a.get-app", "get app", function(node) {
        return {
            platform: node.dataset.platform,
            hero: node.classList.contains("hero-btn")
        };
    });
    mixpanel.track_links("a.padlock-github", "visit github link");
    mixpanel.track_links("a.maklesoft", "visit maklesoft link");
    mixpanel.track_forms("#mc-embedded-subscribe-form", "subscribe to newsletter");
}
