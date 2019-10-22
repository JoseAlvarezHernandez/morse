import {morseDictionary} from './morseDictionary'

const toMorse = word => word.split('').map(morse => Object.keys(morseDictionary).find(key => morseDictionary[key] === morse)).join(' ')

const toEnglish = word => word.split(' ').map(letter => morseDictionary[letter.toLowerCase()]).join('')

export const translate = word => word.match(/[A-Z]/i) ? toMorse(word) : toEnglish(word)

export default { translate }