(function () {
  class Slider {
    constructor ({elem, items}) {
      this._elem = elem;
      this._items = items;
      this._index = 0;
      this._currentPhoto = this._index;
      this.build();
      this._allPhotos = this._elem.querySelectorAll('.slider__image');
      this.hideAllPhotos();
    }

    build () {
      function getImageByIndex (items) {
        return items.map((item, index) => {
          return `<li class="slider__image" data-action="${index}">
                    <img src="${item.src}" alt="">
                  </li>`;
        }).join('');
      };
      this._elem.innerHTML = `${getImageByIndex(this._items)}`;
      this.setupInterval();
    }

    hideAllPhotos () {
      for (let i = 0; i < this._allPhotos.length; i++) {
        this._allPhotos[i].hidden = !this._allPhotos[i].hidden;
      }
    }

    render () {
      this._allPhotos[this._currentPhoto].hidden = !this._allPhotos[this._currentPhoto].hidden;
      this._allPhotos[this._index].hidden = !this._allPhotos[this._index].hidden;
      this._currentPhoto = this._index; 
    }

    setupInterval () {
      let interval = setInterval(() => {
        this._index++;
        if (this._index === 4) {
          this._index = 0;
        };
        this.render();
      }, 1000);
    }
  }

  window.Slider = Slider; //export
})();