import { number, string } from 'prop-types'
import * as React from 'react'

import switchColorByLuminance from './colors/switchColorByLuminance'
import { useThemeContext } from './theme'

export interface CoreComponentProps {
  fgcolor?: string
  bgcolor?: string
  elevation?: number
}

export const CoreComponentPropTypes = {
  fgcolor: string,
  bgcolor: string,
  elevation: number,
}

export const CoreComponentDefaultProps = {
  fgcolor: 'auto',
  bgcolor: undefined,
  elevation: undefined,
}

export const withCoreComponent = <P extends object>(
  Component: React.ComponentType<P & CoreComponentProps>,
): React.FC<P & React.HTMLAttributes<HTMLElement> & CoreComponentProps> => {
  const props = Component.propTypes
  const defaultProps = Component.defaultProps

  if (props) {
    Object.keys(CoreComponentPropTypes).forEach(k => {
      if (props[k]) return
      props[k] = CoreComponentPropTypes[k]
    })
  }

  if (defaultProps) {
    Object.keys(CoreComponentDefaultProps).forEach(k => {
      if (defaultProps[k]) return
      defaultProps[k] = CoreComponentDefaultProps[k]
    })
  }

  const comp: React.FC<P &
    CoreComponentProps &
    React.HTMLAttributes<HTMLElement>> = props => {
    const { className, elevation, bgcolor, fgcolor } = props

    const [_fgColor, setFgColor] = React.useState(fgcolor)
    const theme = useThemeContext()

    let classes = className ? className : ''

    if (elevation !== undefined && elevation !== null) {
      classes += ` elevation-${elevation}`
    }

    if (bgcolor) {
      classes += ` ${bgcolor}`
    }

    React.useEffect(() => {
      if (bgcolor && (!fgcolor || fgcolor === 'auto')) {
        const color = theme.colorForClass(bgcolor)
        const computedFg = switchColorByLuminance(color.hexValue(true))
        if (computedFg) {
          setFgColor(`text--${computedFg}`)
        }
      } else if (fgcolor && fgcolor !== 'auto') {
        setFgColor(`text--${fgcolor}`)
      }
    }, [bgcolor, fgcolor])

    if (_fgColor) {
      classes += ` ${_fgColor}`
    }

    return <Component {...props} className={classes.trim()} />
  }

  comp.propTypes = props
  comp.defaultProps = defaultProps

  return comp
}
