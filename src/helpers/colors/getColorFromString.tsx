// @flow
type GetColorFromString = (
  string: string,
  saturation?: number,
  luminosity?: number,
  opacity?: number,
) => string
const goldenNumber = (1 + Math.sqrt(5)) / 2

const getCharCode = (char: any,isNumber:boolean) => {
  if(isNumber) return char.charCodeAt(0)
  return char.charCodeAt(0) - 96
}

export const getColorFromString: GetColorFromString = (
  string,
  saturation = 0.8,
  luminosity = 0.6,
  opacity = 1,
) => {
  const cleanString = string.replace(/\s/g, '')
  
  const hue = cleanString.split('').reduce((r, v:any) => {
    if(!isNaN(v)) return r + getCharCode(v,true)
    return (r + getCharCode(v,false))
  }, 0)
  
  const h = hue * string.length * goldenNumber
  const s = saturation * 100
  const l = luminosity * 100

  return HSLAToRGBA(h, s, l, opacity)
}

function HSLToRGB(h: number, s: number, l: number) {
  // Must be fractions of 1
  s /= 100
  l /= 100

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return { r, g, b }
}

function HSLAToRGBA(h: number, s: number, l: number, a: number) {
  // Code for HSLToRGB(h,s,l) before return
  const { r, g, b } = HSLToRGB(h % 360, s, l)

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}
