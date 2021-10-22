import { Theme } from './theme'
import LT from './lightTheme'
import DT from './darkTheme'

export const defaultTheme: Theme = LT
export const lightTheme = LT
export const darkTheme = DT

export const RMWCThemeOption = {
  primary: `var(--primary-main)`,
  secondary: `var(--secondary-main)`,
  error: `var(--error-main)`,
  background: `var(--primary-main)`,
  surface: `var(--surface)`,
  primaryBg: `var(--primary-main)`,
  secondaryBg: `var(--secondary-main)`,
  textPrimaryOnBackground: `var(--primary-text)`,
  textSecondaryOnBackground: `var(--secondary-text)`,
  textHintOnBackground: `var(--text)`,
  textDisabledOnBackground: `var(--text-disabled)`,
  textIconOnBackground: `var(--text)`,
  textPrimaryOnLight: `var(---text)`,
  textSecondaryOnLight: `var(--text)`,
  textHintOnLight: `var(--text)`,
  textDisabledOnLight: `var(--text-disabled)`,
  textIconOnLight: `var(--text)`,
  onPrimary: `var(--primary-main)`,
  onSecondary: `var(--secondary-main)`,
  onError: `var(--error-main)`,
  textPrimaryOnDark: `var(--text)`,
  textSecondaryOnDark: `var(--text)`,
  textHintOnDark: `var(--text)`,
  textDisabledOnDark: `var(--text-disabled)`,
  textIconOnDark: `var(--text)`,
}
