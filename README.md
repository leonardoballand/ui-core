# @ied/ui-core

> core library for @ied/ui-\* components

[![NPM](https://img.shields.io/npm/v/@ied/ui-core.svg)](https://www.npmjs.com/package/@ied/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ied/ui-core
```

## Usage 

@ied/ui-core contains elements common to all our components like Theme Provider

### use portal

The use portal utility let you create a portal given an id. The method returns a target
which has to be used with `create-portal` from `react-dom`

```tsx
import * as React from 'react'
import * as UICore from '@ied/ui-core'

import '@ied/ui-core/dist/ui-core.min.css'

const { usePortal } = UICore
const { useState } = React

const MyComponent = () => {
  const target = usePortal('my-portal')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>Toggle Portal</div>

      {isOpen && createPortal(<div>Hello from the portal</div>, target)}
    </>
  )
}

export default MyComponent
```

### The elevation class

The `@ied/ui-core` comes with the elevations classes that enables any component to be
elevated according to [material guidelines](https://material.io/guidelines/resources/shadows.html#shadows-sketch).

You can therefore add the class `elevation-{number}` to your component using a number
from 0 to 24

```tsx
import * as React from 'react'

const myComponent = () => {
  return <div className="elevation-2">Elevated</div>
}

export default MyComponent
``` 

## How to add a property to ui-theme-ied

We must try to leave `ui-theme-ied` as light and useful as possible, only the essential properties should be registered inside it.

Before adding a new property you have to think about if it is really essential and if its place is really in `ui-theme-ied`, if so you must then write a message on Slack in the channel #guild-ui-components to discuss it collectively with the other developers and challenge their proposal before it is validated and can be added to the theme. 

### 5 Steps to Add a Property to ui-theme-ied

On the `ui-theme-ied` component :
1: Add the new property to your iedTheme which is in index.tsx

Then on the `ui-core` component
2: Modify the theme interface found in the theme.tsx file to also add your new property
3 Modify light and dark theme to keep them similar to iedTheme
4: Modify propTypes in themeprovider.tsx
5: Update the index.scss of ui-core by adding —nameOfMyProperty or if it is an object with several properties like for example —nameDeMyPropriete-main / light / dark / text

And your property is now available in `ui-theme-ied`, all you have to do is publish your changes so that it becomes accessible to the team !

## License

MIT © [vibou](https://github.com/vibou)
