import React from 'react'
import styled from 'styled-components'
import { CoreComponent, colorForClass } from '@ied/ui-core'

const colors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey',
  'blue-grey',
  'black',
  'white',
  'fulll',
  'blue-sky',
  'malachite',
  'grenadine',
  'sapphire',
  'duck-green',
  'kiwi',
  'coral',
  'golden-straw',
]
const secondColors = [
  'pearl',
  'grey-white',
  'tin',
  'argent',
  'steel-grey',
  'grey',
  'charcoal-grey',
]
const variations = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]
const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const ColorItemContainer = styled(CoreComponent)`
  width: 20%;
  min-width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`
const ColorItem = styled(CoreComponent)`
   {
    height: 40px;
    box-sizing: border-box;
    padding: 4px 10px;
    display: flex;
    justify-content: space-between;
  }
`
export default () => {
  return (
    <ColorContainer>
      {colors.map(color => {
        return (
          <ColorItemContainer key={color}>
            <ColorItem bgcolor={color}>
              <div className="h6">{color}</div>
              {colorForClass(color).hexValue()}
            </ColorItem>
            {variations.map(v => {
              const variation = `${color}-${v}`
              return (
                <ColorItem key={variation} bgcolor={variation}>
                  <div className="body-2">{variation}</div>
                  {colorForClass(variation).hexValue()}
                </ColorItem>
              )
            })}
          </ColorItemContainer>
        )
      })}
      {secondColors.map(color => {
        return (
          <ColorItemContainer key={color}>
            <ColorItem bgcolor={color}>
              <div className="h6">{color}</div>
              {colorForClass(color).hexValue()}
            </ColorItem>
          </ColorItemContainer>
        )
      })}
    </ColorContainer>
  )
}
