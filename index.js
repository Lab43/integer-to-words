module.exports = function (number) {

  if (typeof number !== 'number') throw 'input must be an integer'
  if (number % 1 !== 0) throw 'input must be an integer';
  if (number >= 1000000000000000) throw 'input must be less than 1,000,000,000,000,000';

  var base = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ],
  tens = [
    null,
    null,
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ],
  thousands = [
    null,
    'thousand',
    'million',
    'billion',
    'trillion'
  ];

  function digit(number, index) {
    return parseInt(number.toString()[index], 10);
  }

  function process(string, iteration) {
    var chunk = parseInt(string.slice(-3), 10),
    next = string.slice(0, -3),
    output = '';

    // hundreds digit
    if (chunk >= 100 ) {
      output += ' ' + base[digit(chunk, 0)] + ' hundred';
      chunk %= 100;
    }

    // less than twenty, so it's a single word
    if (chunk < 20) {
      output += ' ' + base[chunk];

    // more than twenty, so it's possibly two words
    } else {
      output += ' ' + tens[digit(chunk, 0)];
      chunk %= 10;
      if (chunk) {
        output += '-' + base[chunk];
      }
    }

    // add thousand, million, billion, or trillion
    if (iteration) output += ' ' + thousands[iteration];

    // process next chunk
    if (next) return process(next, iteration + 1) + output;

    // this is the last chunk
    return output;
  }

  return process(number.toString(), 0).trim();
}
