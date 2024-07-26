const convertToCelsius = function(fTemp) {
  cTemp = (fTemp-32) * (5/9);
  return Number(cTemp.toFixed(1))
};

const convertToFahrenheit = function(cTemp) {
  fTemp = cTemp * (9/5) +32;
  return Number(fTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
