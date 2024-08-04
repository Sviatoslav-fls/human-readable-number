module.exports = function toReadable(number) {
  const unitsNames = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const teensNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tensNames = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numString = number.toString();

  if (numString.length === 1) {
    if (number === 0) return 'zero';
    if (number < 10) return unitsNames[number];

  } else if (numString.length === 2) {
    if (number < 20) return teensNames[number % 10];
    if (numString[1] === '0') return tensNames[numString[0]];
    return `${tensNames[numString[0]]} ${unitsNames[numString[1]]}`;

  } else if (numString.length === 3) {
    if (numString[1] > 1) {
      if (numString[2] === '0') {
        return `${unitsNames[numString[0]]} hundred ${tensNames[numString[1]]}`;
      } else {
        return `${unitsNames[numString[0]]} hundred ${tensNames[numString[1]]} ${unitsNames[numString[2]]}`;
      }
    } else if (numString[1] === '1') {
      if (numString[2] === '0') {
        return `${unitsNames[numString[0]]} hundred ${tensNames[numString[1]]}`;
      } else {
        return `${unitsNames[numString[0]]} hundred ${teensNames[numString[2]]}`;
      }
    } else if (numString[1] === '0' && numString[2] === '0') {
      return `${unitsNames[numString[0]]} hundred`;
    } else {
      return `${unitsNames[numString[0]]} hundred ${unitsNames[numString[2]]}`;
    }

  } else {
    return 'I don\'t know yet)';
  }
}