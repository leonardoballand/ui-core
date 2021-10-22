import React from 'react'

import {
  CoreComponentDefaultProps,
  CoreComponentPropTypes,
  withCoreComponent,
} from './withCoreComponent'

export const CoreComponent = withCoreComponent(({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
})

CoreComponent.defaultProps = CoreComponentDefaultProps
CoreComponent.propTypes = CoreComponentPropTypes
