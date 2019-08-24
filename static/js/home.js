(function() {
  var scroller,
    scrollerHeight,
    wrapper,
    stage,
    currSection,
    screen1,
    screen2,
    screen3,
    screen4,
    scanCode,
    sectionSize,
    plans;

  var sections = [
    {
      in: function() {
        stage.classList.add('hero');
        screen1.classList.remove('hidden');
        screen2.classList.add('hidden');
        screen3.classList.add('hidden');
        screen4.classList.add('hidden');
        scanCode.classList.add('hidden');
        plans.classList.add('hidden');
      },
      out: function() {
        stage.classList.remove('hero');
      },
    },
    {
      in: function() {
        stage.classList.add('simple');
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
        screen3.classList.add('hidden');
        screen4.classList.add('hidden');
        scanCode.classList.add('hidden');
        plans.classList.add('hidden');
      },
      out: function() {
        stage.classList.remove('simple');
      },
    },
    {
      in: function() {
        stage.classList.add('portable');
        screen1.classList.add('hidden');
        screen2.classList.add('hidden');
        screen3.classList.remove('hidden');
        screen4.classList.add('hidden');
        scanCode.classList.add('hidden');
        plans.classList.add('hidden');
      },
      out: function() {
        stage.classList.remove('portable');
      },
    },
    {
      in: function() {
        stage.classList.add('transparent');
        scanCode.classList.remove('hidden');
        screen1.classList.add('hidden');
        screen2.classList.add('hidden');
        screen3.classList.add('hidden');
        screen4.classList.add('hidden');
        plans.classList.add('hidden');
      },
      out: function() {
        stage.classList.remove('transparent');
      },
    },
    {
      in: function() {
        stage.classList.add('together');
        scanCode.classList.add('hidden');
        screen1.classList.add('hidden');
        screen2.classList.add('hidden');
        screen3.classList.add('hidden');
        screen4.classList.remove('hidden');
        plans.classList.add('hidden');
      },
      out: function() {
        stage.classList.remove('together');
      },
    },
    {
      in: function() {
        stage.classList.add('together');
        scanCode.classList.add('hidden');
        screen1.classList.add('hidden');
        screen2.classList.add('hidden');
        screen3.classList.add('hidden');
        screen4.classList.remove('hidden');
        plans.classList.remove('hidden');
      },
      out: function() {
        stage.classList.remove('together');
      },
    },
  ];

  function scroll() {
    var section;
    for (var i = 0; i < sections.length; i++) {
      if (
        scroller.scrollTop >= i * sectionSize &&
        (i == sections.length - 1 || scroller.scrollTop < (i + 1) * sectionSize)
      ) {
        section = sections[i];
        break;
      }
    }

    if (section && section !== currSection) {
      currSection && currSection.out && currSection.out();
      section && section.in && section.in();
      currSection = section;
    }
  }

  function calcSectionSize() {
    scrollerHeight = window.innerHeight;
    sectionSize =
      (scroller.scrollHeight - scrollerHeight + 400) / (sections.length + 1);
  }

  window.addEventListener('load', function() {
    if (
      !Modernizr.video.h264 ||
      !Modernizr.cssanimations ||
      !Modernizr.flexbox ||
      !Modernizr.nthchild ||
      !Modernizr.csstransforms3d ||
      !Modernizr.classlist ||
      !Modernizr.testProp('animation') ||
      !Modernizr.testAllProps('backface-visibility')
    ) {
      document.body.class = 'legacy';
      return;
    }

    wrapper = document.querySelector('.device-wrapper');
    stage = document.querySelector('.device-stage');
    scroller = document.scrollingElement || document.documentElement;
    var screens = wrapper.querySelectorAll('img');
    screen1 = screens[0];
    screen2 = screens[1];
    screen3 = screens[2];
    screen4 = screens[3];
    scanCode = wrapper.querySelector('.device.phone .code');
    plans = document.querySelector('section.plans');

    var lastScrollTop, lastSectionSize;
    setInterval(function() {
      calcSectionSize();

      if (
        lastScrollTop !== scroller.scrollTop ||
        sectionSize !== lastSectionSize
      ) {
        scroll();
        lastScrollTop = scroller.scrollTop;
        lastSectionSize = sectionSize;
      }
    }, 100);

    calcSectionSize();
    scroll();
  });
})();
