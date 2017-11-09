(function() {
    if (
        !Modernizr.video.h264 ||
        !Modernizr.cssanimations ||
        !Modernizr.flexbox ||
        !Modernizr.nthchild ||
        !Modernizr.csstransforms3d ||
        !Modernizr.classlist ||
        !Modernizr.testProp("animation") ||
        !Modernizr.testAllProps("backface-visibility")
    ) {
        document.body.class = "legacy";
    }

    var scroller, scrollerHeight, wrapper, stage, currSection,
        video1, video2, video3, scanCode, downloads, sectionSize;

    var sections = [
        {
            in: function() {
                stage.classList.add("hero");
                video1.classList.remove("hidden");
                video2.classList.add("hidden");
                scanCode.classList.add("hidden");
                video1.play();
                mixpanel.track("view section", { section: "hero" });
            },
            out: function() {
                stage.classList.remove("hero");
            }
        },
        {
            in: function() {
                stage.classList.add("simple");
                video2.classList.remove("hidden");
                video1.classList.add("hidden");
                scanCode.classList.add("hidden");
                video2.play();
                mixpanel.track("view section", { section: "simple" });
            },
            out: function() {
                stage.classList.remove("simple");
            }
        },
        {
            in: function() {
                stage.classList.add("portable");
                video3.classList.remove("hidden");
                downloads.classList.add("hidden");
                video3.play();
                mixpanel.track("view section", { section: "portable" });
            },
            out: function() {
                stage.classList.remove("portable");
            }
        },
        {
            in: function() {
                stage.classList.add("transparent");
                video2.classList.add("hidden");
                video1.classList.add("hidden");
                scanCode.classList.remove("hidden");
                mixpanel.track("view section", { section: "transparent" });
            },
            out: function() {
                stage.classList.remove("transparent");
            }
        },
        {
            in: function() {
                stage.classList.add("tryit");
                video3.classList.add("hidden");
                downloads.classList.remove("hidden");
                mixpanel.track("view section", { section: "try it" });
            },
            out: function() {
                stage.classList.remove("tryit");
            }
        }
    ];

    function scroll() {
        var section;
        for (var i = 0; i < sections.length; i++) {
            if (scroller.scrollTop >= i * sectionSize && scroller.scrollTop < (i + 1) * sectionSize) {
                section = sections[i];
                break;
            }
        }

        if (section && section !== currSection) {
            currSection && currSection.out && currSection.out();
            section && section.in && section.in();
            currSection = section;
        }
    };

    function calcSectionSize() {
        scrollerHeight = window.innerHeight;
        sectionSize = (scroller.scrollHeight - scrollerHeight + 400) / (sections.length + 1);
    }


    window.addEventListener("load", function() {
        wrapper = document.querySelector(".device-wrapper");
        stage = document.querySelector(".device-stage");
        scroller = document.scrollingElement || document.documentElement;
        video1 = wrapper.querySelectorAll(".device.phone video")[0];
        video2 = wrapper.querySelectorAll(".device.phone video")[1];
        video3 = wrapper.querySelector(".device.desktop video");
        scanCode = wrapper.querySelector(".device.phone .code");
        downloads = wrapper.querySelector(".device.desktop .downloads");

        var lastScrollTop, lastSectionSize;
        setInterval(function() {
            calcSectionSize();

            if (lastScrollTop !== scroller.scrollTop || sectionSize !== lastSectionSize) {
                scroll();
                lastScrollTop = scroller.scrollTop;
                lastSectionSize = sectionSize;
            }
        }, 200);
        scroll();
    });
})();
