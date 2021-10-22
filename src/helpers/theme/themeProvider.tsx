import { ThemeProvider as RMWCThemeProvider } from '@rmwc/theme'
import cloneDeep from 'lodash.clonedeep'
import isObject from 'lodash.isobject'
import merge from 'lodash.merge'
import { node, number, shape, string } from 'prop-types'
import React, { ReactElement, useMemo, useRef, useState } from 'react'
import { useEffect } from 'react'

import { Color, colorForClass } from '../colors/colorForClass'
import { RMWCThemeOption, defaultTheme } from './defaultTheme'
import { Theme } from './theme'

class Defaults {
  static propTypes = {
    theme: shape({
      type: string.isRequired,
      surface: string,
      background: shape({
        application: string,
      }),
      button: shape({
        default: string,
        disabled: string,
      }),
      snackbar: shape({
        light: string,
        main: string,
        dark: string,
        text: string,
      }),
      primary: shape({
        light: string,
        main: string.isRequired,
        dark: string,
        text: string,
      }),
      secondary: shape({
        light: string,
        main: string.isRequired,
        dark: string,
        text: string,
      }),
      info: shape({
        light: string,
        main: string,
        dark: string,
        text: string,
      }),
      success: shape({
        light: string,
        main: string,
        dark: string,
        text: string,
      }),
      error: shape({
        light: string,
        main: string,
        dark: string,
        text: string,
      }),
      warning: shape({
        light: string,
        main: string,
        dark: string,
        text: string,
      }),
      text: shape({
        primary: string,
        secondary: string,
        disabled: string,
        default: string,
      }),
      divider: string,
      typography: shape({
        fontFamily: string,
        fontSize: string,
        fontWeightThin: number,
        fontWeightLight: number,
        fontWeightRegular: number,
        fontWeightMedium: number,
        fontWeightBold: number,
        fontWeightDark: number,
        h1: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        h2: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        h3: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        h4: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        h5: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        h6: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        subtitle1: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        subtitle2: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        body1: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        body2: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        button: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        caption: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
        overline: shape({
          fontFamily: string,
          fontWeight: number,
          fontSize: string,
          lineHeight: number,
          letterSpacing: string,
        }),
      }),
    }),
  }
}

export function computeStyle(obj: Theme, path = '-', style = {}) {
  for (let k in obj) {
    if (isObject(obj[k])) {
      computeStyle(obj[k], path + `-${k}`, style)
    } else {
      style[`${path}-${k}`] = obj[k]
    }
  }

  return style
}

export interface ControlledTheme extends Theme {
  changeTheme: (theme: Theme, setAsDefault?: boolean) => void
  colorForClass: (cls: string) => Color
}

let DEFAULT_CONTROLLED_THEME: ControlledTheme = {
  ...defaultTheme,
  changeTheme: (theme: Theme) => {
    setupDefaultTheme(theme)
  },

  colorForClass: (cls: string) => colorForClass(cls),
}

export const ThemeContext = React.createContext<ControlledTheme | null>(null)

export interface ThemeProviderProps {
  children: ReactElement
  theme: Theme
}

export function getDefaultTheme(): ControlledTheme {
  return DEFAULT_CONTROLLED_THEME
}

export function setupDefaultTheme(theme: Theme) {
  const clonePalette = cloneDeep(defaultTheme)
  const cloneTheme = cloneDeep(theme)
  const mergedTheme = merge(clonePalette, cloneTheme)
  const rootStyle = {
    '--font-family': mergedTheme.typography?.fontFamily || 'sans-serif',
    '--font-weight-thin': mergedTheme.typography?.fontWeightThin || 100,
    '--font-weight-light': mergedTheme.typography?.fontWeightLight || 300,
    '--font-weight-regular': mergedTheme.typography?.fontWeightRegular || 400,
    '--font-weight-medium': mergedTheme.typography?.fontWeightMedium || 600,
    '--font-weight-bold': mergedTheme.typography?.fontWeightBold || 700,
    '--font-weight-dark': mergedTheme.typography?.fontWeightDark || 900,
    color: 'var(--text-default)',
    'font-family': 'var(--typography-fontFamily)',
    'font-size': 'var(--typography-fontSize)',
  }

  const style = computeStyle(mergedTheme, '-', rootStyle)

  const cssText = Object.entries(style).reduce((acc, [key, value]) => {
    return `${acc}${key}: ${value};`
  }, '' as string)

  const controlledTheme: ControlledTheme = {
    ...mergedTheme,
    changeTheme: newTheme => {
      setupDefaultTheme(newTheme)
    },

    colorForClass: cls => colorForClass(cls),
  }

  DEFAULT_CONTROLLED_THEME = controlledTheme

  document.body.style.cssText = cssText
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => {
  const { theme, children } = props

  const [style, setStyle] = useState({})
  const [appliedTheme, setAppliedTheme] = useState(theme)

  const clonePalette = cloneDeep(defaultTheme)
  const cloneTheme = cloneDeep(appliedTheme)
  const mergedTheme = merge(clonePalette, cloneTheme)
  const colorForClassRef = useRef<any | null>(null)
  const initialControlledTheme: ControlledTheme = {
    ...mergedTheme,
    changeTheme: (newTheme, shouldSetDefault) => {
      if (shouldSetDefault) {
        setupDefaultTheme(newTheme)
      }
      setAppliedTheme(newTheme)
    },

    colorForClass: cls => colorForClass(cls, colorForClassRef.current),
  }
  const [controlledTheme, setControlledTheme] = useState<ControlledTheme>(
    initialControlledTheme,
  )

  const refStyle = useMemo(
    () =>
      ({
        ...style,
        flex: '0',
        width: '0px',
        height: '0px',
        position: 'absolute',
        display: 'none',
      } as any),
    [style],
  )

  useEffect(() => setAppliedTheme(theme), [theme])

  useEffect(() => {
    if (appliedTheme) {
      const rootStyle = {
        color: 'var(--text-default)',
        fontFamily: 'var(--typography-fontFamily)',
        fontSize: 'var(--typography-fontSize)',
        '--font-family': mergedTheme.typography?.fontFamily || 'sans-serif',
        '--font-weight-thin': mergedTheme.typography?.fontWeightThin || 100,
        '--font-weight-light': mergedTheme.typography?.fontWeightLight || 300,
        '--font-weight-regular':
          mergedTheme.typography?.fontWeightRegular || 400,
        '--font-weight-medium': mergedTheme.typography?.fontWeightMedium || 600,
        '--font-weight-bold': mergedTheme.typography?.fontWeightBold || 700,
        '--font-weight-dark': mergedTheme.typography?.fontWeightDark || 900,
      }
      setStyle(computeStyle(mergedTheme, '-', rootStyle))
    }
  }, [appliedTheme, colorForClassRef])

  useEffect(() => {
    if (appliedTheme) {
      const clonePalette = cloneDeep(defaultTheme)
      const cloneTheme = cloneDeep(appliedTheme)
      const mergedTheme = merge(clonePalette, cloneTheme)

      const controlledTheme: ControlledTheme = {
        ...mergedTheme,
        changeTheme: (newTheme, shouldSetDefault) => {
          if (shouldSetDefault) {
            setupDefaultTheme(newTheme)
          }
          setAppliedTheme(newTheme)
        },

        colorForClass: cls => colorForClass(cls, colorForClassRef.current),
      }
      setControlledTheme(controlledTheme)
    }
  }, [style])

  const elements = React.cloneElement(children, {
    style,
  })

  return (
    <ThemeContext.Provider
      value={theme ? controlledTheme : React.useContext(ThemeContext)}
    >
      <>
        <div ref={colorForClassRef} style={refStyle}></div>
        <RMWCThemeProvider options={RMWCThemeOption} wrap>
          {elements}
        </RMWCThemeProvider>
      </>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  ...Defaults.propTypes,
  children: node.isRequired,
} as any

ThemeProvider.defaultProps = { theme: defaultTheme }

export default ThemeProvider
