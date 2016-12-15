(function () {
  class Slider {
    constructor ({elem, items}) {
      this._elem = elem;
      this._items = items;
      this._index = 0;
      this.setup();
      this._onClick = this._onClick.bind(this);
      this.initEvent();
      
      
    }

    setup () {
      this.build();
      this.$allPhotos = this._elem.querySelectorAll('.slider__image');
      this.hideAllPhotos();
      this.displayPhoto();
      this.setupInterval();
      
    }

    build () {
      function getImageByIndex (items) {
        return items.map((item, index) => {
          return `<li class="slider__image" data-action="${index}">
                    <img src="${item.src}" alt="">
                  </li>`;
        }).join('');
      };
      this._elem.innerHTML = `<a class="slider__prev"><</a>
                              <a class="slider__next">></a>
                              ${getImageByIndex(this._items)}`;
    }

    initEvent () {
      this._elem.addEventListener('click', this._onClick);
    }

    _onClick (event) {
      let target = event.target;
      switch (target.className) {
        case 'slider__prev':
          this._onClickPrev();
          break;
        case 'slider__next':
          this._onClickNext();
          break;
      }
    }

    _onClickPrev () {
      this.stopInterval();
      this.hidePhoto(this.getCurrentPhoto(this._index));
      this._index--;
      if (this._index === -1) this._index = this.$allPhotos.length - 1;
      this.displayPhoto(); 
    }

    _onClickNext () {
      this.stopInterval();
      this.hidePhoto(this.getCurrentPhoto(this._index));
      this._index++;
      if (this._index === this.$allPhotos.length) this._index = 0;
      this.displayPhoto(); 
    }

    hideAllPhotos () {
      this.$allPhotos.forEach(($item) => {
        this.hidePhoto($item);
      })
    }

    hidePhoto (currentPhoto) {
      currentPhoto.classList.toggle('hide');
    }

    getCurrentPhoto () {
       return this.$allPhotos[this._index];
    }
 
    displayPhoto () {
      this.$allPhotos[this._index].classList.toggle('hide');
    }

  
    stopInterval () {
      clearInterval(this._interval);
    }

    setupInterval () {
      this._interval = setInterval(
        this._onClickNext.bind(this)
      , 5000);
    }
  }

  window.Slider = Slider; //export
})();