import Button from '@ied/ui-button'
import { Card, CardActions, CardText, CardTitle } from '@ied/ui-card'
import { ThemeProvider, setupDefaultTheme } from '@ied/ui-core'
import ibizaTheme from '@ied/ui-theme-ibiza'
import iedTheme from '@ied/ui-theme-ied'
import React, { useState } from 'react'
import Colors from './Colors'

import { Typo } from './Typo'

setupDefaultTheme(ibizaTheme)
export default function() {
  const [theme, setTheme] = useState(iedTheme)

  const toggleTheme = () => {
    if (theme.type === iedTheme.type) {
      setupDefaultTheme(iedTheme)
      setTheme(ibizaTheme)
    } else {
      setupDefaultTheme(ibizaTheme)
      setTheme(iedTheme)
    }
  }

  return (
    <div className="main-container">
      <Button raised onClick={toggleTheme}>
        Switch Themes
      </Button>
      <div className="theme-preview">
        <Card>
          <CardTitle>Default Theme Card</CardTitle>
          <CardText>
            This card uses the default theme{' '}
            {theme.type === iedTheme.type ? ibizaTheme.type : iedTheme.type}
          </CardText>
          <CardActions>
            <Button danger>Cancel</Button>
            <Button raised primary>
              Theme Primary
            </Button>
            <Button raised color="primary">
              Class Based Primary
            </Button>
          </CardActions>
        </Card>
        <Typo />
      </div>

      <ThemeProvider theme={theme}>
        <div className="theme-preview">
          <Card>
            <CardTitle>Theme Provider Card</CardTitle>
            <CardText>This card uses the theme provider {theme.type}</CardText>
            <CardActions>
              <Button danger>Cancel</Button>
              <Button raised primary>
                Theme Primary
              </Button>
              <Button raised color="primary">
                Class Based Primary
              </Button>
            </CardActions>
          </Card>
          <Typo />
        </div>
      </ThemeProvider>
      <h1>Colors</h1>
      <Colors/>
    </div>
  )
}
