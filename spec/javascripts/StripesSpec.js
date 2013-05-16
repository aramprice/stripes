describe("Stripes", function() {
  var stripes,
      elements;

  afterEach(function() {
    document.getElementById('jasmine_content').setAttribute('style', '');
    document.getElementById('jasmine_content').innerHTML = '';
  });

  describe("after initialization", function() {
    describe("baseElement", function() {
      beforeEach(function() {
        stripes = new Stripes(document.getElementById('jasmine_content'));
        elements = stripes.baseElement.childNodes;
      });

      it("is the element passed to the initializer", function() {
        expect(stripes.baseElement).toEqual(document.getElementById('jasmine_content'));
      });

      it("has height set to 100%", function() {
        expect(stripes.baseElement.style.height).toEqual('100%');
      });

      it("has width set to 100%", function() {
        expect(stripes.baseElement.style.width).toEqual('100%');
      });

      it("has margin set to '0px'", function() {
        expect(stripes.baseElement.style.margin).toEqual('0px');
      });

      it("has padding set to '0px'", function() {
        expect(stripes.baseElement.style.padding).toEqual('0px');
      });

      it("has three child nodes", function() {
        expect(stripes.baseElement.childElementCount).toEqual(3);
      });
    });

    describe("childNodes", function() {
      beforeEach(function() {
        stripes = new Stripes(document.getElementById('jasmine_content'));
        elements = stripes.baseElement.childNodes;
      });

      it("have color values set", function() {
        for (var i = 0; i < elements.length; ++i) {
          expect(elements[i].style.backgroundColor).toMatch(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/);
        }
      });

      it("have margin values of '0px'", function() {
        for (var i = 0; i < elements.length; ++i) {
          expect(elements[i].style.margin).toEqual('0px');
        }
      });

      it("have padding values of '0px'", function() {
        for (var i = 0; i < elements.length; ++i) {
          expect(elements[i].style.padding).toEqual('0px');
        }
      });
    });

    describe("when horizontal", function() {
      beforeEach(function() {
        stripes = new Stripes(document.getElementById('jasmine_content'), {horizontal: true});
        elements = stripes.baseElement.childNodes;
      });

      describe("childNodes", function() {
        it("child element heights sum to 100", function() {
          var aggregateHeight= 0;

          for (var i = 0; i < elements.length; ++i) {
            aggregateHeight += parseInt(elements[i].style.height);
          }

          expect(aggregateHeight).toEqual(100);
        });

        it("child element widths are '100%'", function() {
          for (var i = 0; i < elements.length; ++i) {
            expect(elements[i].style.width).toEqual('100%');
          }
        });
      });
    });

    describe("when vertical", function() {
      beforeEach(function() {
        stripes = new Stripes(document.getElementById('jasmine_content'));
        elements = stripes.baseElement.childNodes;
      });

      describe("childNodes", function() {
        it("child element heights are '100%'", function() {
          for (var i = 0; i < elements.length; ++i) {
            expect(elements[i].style.height).toEqual('100%');
          }
        });

        it("child element widths sum to 100", function() {
          var aggregateWidth = 0;

          for (var i = 0; i < elements.length; ++i) {
            aggregateWidth += parseInt(elements[i].style.width);
          }

          expect(aggregateWidth).toEqual(100);
        });
      });
    });

  });
});
