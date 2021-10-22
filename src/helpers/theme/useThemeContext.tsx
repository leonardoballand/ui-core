import { useContext } from 'react'

import { ControlledTheme, ThemeContext, getDefaultTheme } from './themeProvider'

export function useThemeContext(): ControlledTheme {
  const theme = useContext(ThemeContext) || getDefaultTheme()

  return theme
}

export default useThemeContext
