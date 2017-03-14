const numbers = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ',
  'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ']

function toWord (num) {
  return numbers[parseInt(num)]
}

function getColClass (num) {
  return toWord(parseInt(num)) + 'column'
}

function getWidthClass (num) {
  return toWord(parseInt(num)) + 'wide'
}

export default {
  toWord,
  getColClass,
  getWidthClass
}
