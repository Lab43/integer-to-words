integer-to-words
================

A simple Node.js module that converts integers to words. Supports any integer up less than 1,000,000,000,000,000.

```
var integer-to-words = require('integer-to-words');

integer-to-words(43); // 'forty-three'
integer-to-words(2014); // 'two thousand fourteen'
integer-to-words(123456789); // 'one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine'

integer-to-words('43'); // ERROR: input must be an integer
integer-to-words(4.3); // ERROR: input must be an integer
integer-to-words(1000000000000000); // ERROR: input must be less than 1,000,000,000,000,000
```
