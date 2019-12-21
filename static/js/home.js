(function() {
  function scroll() {
    const section = document
      .elementsFromPoint(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
      )
      .find(el => el.tagName === 'SECTION');

    section && section.classList.remove('hidden');
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

    window.addEventListener('scroll', scroll);
    scroll();
  });
})();
