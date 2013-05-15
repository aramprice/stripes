var Stripes = function(baseElement, options) {
  this.baseElement = baseElement;

  var vertical = true;

  if (typeof(options) !== 'undefined' && options.horizontal === true) {
    vertical = false;
  }

  this.baseElement.style.height = '100%';
  this.baseElement.style.width = '100%';
  this.baseElement.style.margin = '0px';
  this.baseElement.style.padding = '0px';

  var sizes = createSizes();

  for (var i = 0; i < sizes.length; ++i) {
    baseElement.appendChild(createElement());
  }

  function createSizes() {
    var firstInt = randomIntLessThan(100);
    var secondInt = randomIntLessThan(100 - firstInt);
    var thirdInt = 100 - firstInt - secondInt;

    return [firstInt, secondInt, thirdInt];
  }

  function createElement() {
    var element = document.createElement('div');
    element.style.backgroundColor = randomRgbHexColor();
    element.style.margin = 0;
    element.style.padding = 0;

    element.style.float = 'left';
    if (vertical) {
      element.style.height = '100%';
      element.style.width = sizes[i] + '%';
    } else {
      element.style.height = sizes[i] + '%';
      element.style.width = '100%';
    }

    return element;
  }

  function randomRgbHexColor() {
    var hexColor = '#';

    for (var i = 0; i < 6; i++) {
      hexColor += randomIntLessThan(15).toString(16);
    }

    return hexColor;
  }

  function randomIntLessThan(max) {
    return Math.floor(Math.random() * max);
  }
};
