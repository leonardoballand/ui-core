import React, { FC } from 'react'

import { ControlledTheme } from './themeProvider'
import useThemeContext from './useThemeContext'

export interface ThemedComponentProps {
  theme: ControlledTheme
}

export function withThemeProvider<T>(
  Component: FC<T & ThemedComponentProps>,
): FC<T> {
  return props => {
    const theme = useThemeContext()

    return <Component {...props} theme={theme} />
  }
}

export default withThemeProvider
