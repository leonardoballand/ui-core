import { number } from 'prop-types'

import colorValues from './colorValues'
import switchColorByLuminance from './switchColorByLuminance'

const hexDigits = new Array(
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
)

function hex(x: number) {
  return isNaN(x) ? '00' : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16]
}

export class Color {
  a: number
  b: number
  g: number
  r: number

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  hexValue(withAlpha?: boolean, alpha?: number): string {
    const newAlpha = alpha === undefined ? this.a : alpha
    return (
      '#' +
      hex(this.r) +
      hex(this.g) +
      hex(this.b) +
      (withAlpha ? hex(newAlpha * 255) : '')
    )
  }

  rgb(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  rgba(alpha?: number): string {
    const newAlpha = alpha === undefined ? this.a : alpha
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${newAlpha})`
  }

  luminanceColor(lightColor?: string, darkColor?: string): Color {
    const color = switchColorByLuminance(this.hexValue())

    return parseColor(color)
  }
}

export const colorForClass = (cls: string, ref?: HTMLElement | null): Color => {
  var newDiv = document.createElement('div')
  newDiv.setAttribute('class', `${cls}`)

  if (ref) {
    ref.appendChild(newDiv)
  } else {
    document.body.appendChild(newDiv)
  }

  const color = getComputedStyle(newDiv).backgroundColor

  if (ref) {
    ref.removeChild(newDiv)
  } else {
    document.body.removeChild(newDiv)
  }

  const parsedColors = colorValues(color)

  return new Color(
    parsedColors[0] || 0,
    parsedColors[1] || 0,
    parsedColors[2] || 0,
    parsedColors[3],
  )
}

const Black = new Color(0, 0, 0, 1)

export function parseColor(color: string | null): Color {
  const values = colorValues(color)
  if (values.length === 0) return Black

  const [r, g, b, a] = values

  return new Color(r, g, b, a)
}
