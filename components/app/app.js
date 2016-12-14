(function () {
  let Slider = window.Slider;

  new Slider ({
    elem: document.querySelector('.slider'),
    items: [
      {
        src: 'components/slider/img/1.png'
      },
      {
        src: 'components/slider/img/2.jpg'
      },
      {
        src: 'components/slider/img/3.jpg'
      },
      {
        src: 'components/slider/img/4.jpg'
      }
    ]
  })
})();