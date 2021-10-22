// import colorValues from './colorValues'
import { getLuminance } from 'polished'

export function switchColorByLuminance(
  color: string,
  lightColor = 'white',
  darkColor = 'black',
) {
  return getLuminance(color || lightColor) < 0.5 ? lightColor : darkColor
}

export default switchColorByLuminance
