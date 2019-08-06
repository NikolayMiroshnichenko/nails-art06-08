if (window.matchMedia("(max-width: 968px)").matches) {
        var slider = tns({
        container: '.masters-list',
        items: 1,
        center: true,
        autoplay: true,
        controlsPosition: 'bottom',
        controlsContainer: '.slider-btn',
        nav: false,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        navCurrentCached: false,
    });
};
  