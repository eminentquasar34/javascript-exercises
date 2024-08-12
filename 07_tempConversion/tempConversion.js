const convertToCelsius = function(temp) {
  let output = (temp - 32) * 5 / 9;
  output = Math.round(output * 10)/10;
  return output;
};

const convertToFahrenheit = function(temp) {
  let output = (temp * 9/5) + 32;
  output = Math.round(output * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
