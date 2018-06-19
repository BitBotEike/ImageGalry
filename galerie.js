if (!Date.now) {
  Date.now = () => { return new Date().getTime(); }
}

var gal;

function Galerie() {
  this.pointer    = 0,
  this.images     = [];
  this.timestamp  = Date.now();

  this.wrapper    = null;
  this.image      = null;
  this.leftArrow  = null;
  this.rightArrow = null;
  this.closeBTN   = null;

  this.init         = (imgArr) => {
    if (imgArr == null || imgArr.length == null) {
      throw new Error("Dieses Argument ist kein Array");
    } else {
      this.images = imgArr;
    }

    this.pointer = 0;

    document.head.innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">'

    // CREATES THE ELEMENTS FOR THE GALERIE
    this.wrapper     = document.createElement("div");
    this.image       = document.createElement("img");
    this.leftArrow   = document.createElement("span");
    this.rightArrow  = document.createElement("span");
    this.closeBTN   = document.createElement("span");

    // ATTRIBUTES
    this.wrapper.setAttribute("class", "galerie " + this.timestamp);
    this.leftArrow.setAttribute("class", "leftArrow " + this.timestamp);
    this.leftArrow.innerHTML    = '<i class="fas fa-angle-left"></i>';
    this.leftArrow.addEventListener("click", function() { gal.previousImg();});

    this.rightArrow.setAttribute("class", "rightArrow " + this.timestamp);
    this.rightArrow.innerHTML   = '<i class="fas fa-angle-right"></i>';
    this.rightArrow.addEventListener("click", function() { gal.nextImg();});

    this.closeBTN.setAttribute("class", "closeBTN " + this.timestamp);
    this.closeBTN.innerHTML     = '<i class="fas fa-times"></i>';
    this.closeBTN.addEventListener("click", function() { gal.hide();});

    this.load(this.images[this.pointer]);

    // ADD THEM TO THE HTML FILE
    this.wrapper.appendChild(this.image);
    this.wrapper.appendChild(this.leftArrow);
    this.wrapper.appendChild(this.rightArrow);
    this.wrapper.appendChild(this.closeBTN);
    document.body.appendChild(this.wrapper);
  };
  this.setImages    = (imgArr) => {
    if (imgArr.length == null) {
      throw new Error("Dieses Argument ist kein Array");
    } else {
      this.images = imgArr;
    }
  };
  this.nextImg      = () => {
    if (this.pointer == this.images.length - 1) {
      this.pointer = 0;
    } else {
      this.pointer++;
    }

    this.load(this.images[this.pointer]);

  };
  this.previousImg  = () => {
    if (this.pointer == 0) {
      this.pointer = this.images.length - 1;
    } else {
      this.pointer--;
    }

    this.load(this.images[this.pointer]);
  }
  this.load         = (url) => {
    this.image.src = url;
  };
  this.show         = () => {
    this.wrapper.setAttribute("style", "display: block;");
  };
  this.hide         = () => {
    this.wrapper.setAttribute("style", "display: none;");
    gal = null;
  }
};
function showGalerie(galerie) {
  gal = galerie;
  gal.show();
}
