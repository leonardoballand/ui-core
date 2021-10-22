import { useThemeContext } from '@ied/ui-core'
import React from 'react'

const typos = {
  h1: { info: '96 DSP - light' },
  h2: { info: '60 DSP - light' },
  h3: { info: '48 DSP - regular' },
  h4: { info: '34 DSP - regular' },
  h5: { info: '24 DSP - regular' },
  h6: { info: '20 DSP - medium' },
  subtitle1: { info: '16 DSP - regular' },
  subtitle2: { info: '14 DSP - medium' },
  body1: { info: '16 DSP - regular' },
  body2: { info: '14 DSP - regular' },
  button: { info: '14 DSP - medium' },
  caption: { info: '12 DSP - regular' },
  overline: { info: '10 DSP - regular' },
}

export const Typo = () => {
  const theme = useThemeContext()
  return (
    <div className="typo-container">
      {Object.keys(typos).map(t => {
        const info = (theme.typography || {})[t] || {}
        const infoStr = Object.entries(info)
          .map(([k, v]) => `${k}: ${v}`)
          .join(' - ')
        return (
          <div key={t} className={`typo-item ${t}`}>
            {t} - {infoStr}
          </div>
        )
      })}
    </div>
  )
}

export default Typo
