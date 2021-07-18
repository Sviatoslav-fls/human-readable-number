module.exports = function toReadable(number) {
	const unitsNames = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	const teensNames = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	const tensNames = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundred = ' hundred';
	let numString = number.toString();

	if (number === 0) {
		return 'zero';
	} else if (number <= 10) {
		return unitsNames[number];
	} else if (numString.length === 2 && number > 10 && number < 20) {
		return teensNames[number % 10];
	} else if (numString.length === 2 && number >= 20) {
		if (numString[1] === '0') {
			return tensNames[numString[0]];
		}
		return tensNames[numString[0]] + " " + unitsNames[numString[1]];
	} else if (numString.length === 3 && numString[1] > 1) {
		if (numString[2] === '0') {
			return unitsNames[numString[0]] + hundred + ' ' + tensNames[numString[1]];
		}
		return unitsNames[numString[0]] + hundred + ' ' + tensNames[numString[1]] + ' ' + unitsNames[numString[2]];
	} else if (numString.length === 3 && numString[1] === '1') {
		if (numString[2] === '0') {
			return unitsNames[numString[0]] + hundred + ' ' + tensNames[numString[1]];
		}
		return unitsNames[numString[0]] + hundred + ' ' + teensNames[numString[2]];
	} else if (numString.length === 3 && numString[1] === '0') {
		if (numString[2] === '0') {
			return unitsNames[numString[0]] + hundred;
		}
		return unitsNames[numString[0]] + hundred + ' ' + unitsNames[numString[2]];
	} else {
		return 'I don\'t know yet)';
	}
}
