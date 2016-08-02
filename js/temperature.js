function Temperature(kelvin) {
  this.kelvin = kelvin;
}

Temperature.prototype.celsius = function() {
  var temp = this.kelvin - 273.15;
  return temp;
};

Temperature.prototype.fahrenheit = function () {
  return this.kelvin * 9/5-459.67;
};

exports.tempModule = Temperature;
