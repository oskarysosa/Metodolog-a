//Clase A

var Foo = (function () {
  // "private" variables
  var _bar;
  var lorem;

  // constructor
  function Foo() {}

  // add the methods to the prototype so that all of the
  // Foo instances can access the private static
  Foo.prototype.getBar = function () {
    return _bar;
  };
  Foo.prototype.setBar = function (bar) {
    _bar = bar;
  };

  return Foo;
})();

var a = new Foo();
var b = new Foo();
a.setBar("a");
b.setBar("b");
alert(a.getBar()); // alerts 'b' :(

var Foo = (function () {
  // constructor
  function Foo() {
    this._bar = "some value";
  }

  // add the methods to the prototype so that all of the
  // Foo instances can access the private static
  Foo.prototype.getBar = function () {
    return this._bar;
  };
  Foo.prototype.setBar = function (bar) {
    this._bar = bar;
  };

  return Foo;
})();
