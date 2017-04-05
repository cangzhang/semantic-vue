const numbers = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ',
  'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ']

const sizeRange = ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

const headerSize = ['', 'huge', 'large', 'medium', 'small', 'tiny']

const direction = ['', 'up', 'below', 'left', 'right']

export function toWord (num) {
  return numbers[parseInt(num)]
}

export function getColClass (num) {
  return toWord(parseInt(num)) + 'column'
}

export function getWidthClass (num) {
  return toWord(parseInt(num)) + 'wide'
}

export function getSize (size, type) {
  if (!!size) {
    let realSize = parseInt(size)
    if (isNaN(realSize)) {
      realSize = size.toLowerCase()
      return sizeRange.indexOf(realSize) >= 0 ? realSize : ''
    }
    if (typeof type === 'undefined') {
      if (realSize > 8) return sizeRange[8]
      return realSize >= 0 && realSize <= 8 ? sizeRange[realSize] : ''
    } else if (type === 'header') {
      if (realSize > 5) return headerSize[5]
      return realSize >= 0 && realSize <= 5 ? headerSize[realSize] : ''
    }
  }
}

export function getPointingTo (dir) {
  if (!!dir) {
    if (typeof dir === 'boolean' || dir === 'up') dir = ''
    let index = direction.indexOf(dir)
    if (index >= 0) {
      return index <= 2 ? 'pointing ' + dir : dir + ' pointing'
    }
  }
}

export function getAlignedClass(aligned) {
  if (typeof aligned !== 'undefined') {
    if (['left', 'center', 'right'].indexOf((aligned).toLowerCase()) >= 0)
      return (aligned).toLowerCase() + ' aligned'
    return 'center aligned'
  }
  return ''
}

export function getFloatedClass(floated) {
  if (typeof floated !== 'undefined') {
    if ((floated).toLowerCase() === 'right') return 'right floated'
    return 'left floated'
  }
  return ''
}
