const numbers = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ',
  'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ']

const sizeRange = ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

function toWord (num) {
  return numbers[parseInt(num)]
}

function getColClass (num) {
  return toWord(parseInt(num)) + 'column'
}

function getWidthClass (num) {
  return toWord(parseInt(num)) + 'wide'
}

function getSize (size) {
  if (!!size) {
    let realSize = parseInt(size)
    if (isNaN(realSize)) {
      realSize = size.toLowerCase()
      return sizeRange.indexOf(realSize) >= 0 ? realSize : ''
    }
    if (realSize > 8) return sizeRange[8]
    return realSize >= 0 && realSize <= 8 ? sizeRange[realSize] : ''
  }
}

export default {
  toWord,
  getColClass,
  getWidthClass,
  getSize
}
