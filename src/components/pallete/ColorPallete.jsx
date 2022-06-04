import React from 'react'
import { Pallette,
    PinkButton,
    BlueButton,
    GreenButton,
    YellowButton,
    WhiteButton,} from "./colorPalleteComponent.js"

export const ColorPallete = ({setbgColor}) => {
  return (
    <Pallette>
    <PinkButton onClick={() => setbgColor("lightpink")}></PinkButton>
    <BlueButton onClick={() => setbgColor("lightblue")}></BlueButton>
    <GreenButton onClick={() => setbgColor("lightgreen")}></GreenButton>
    <YellowButton onClick={() => setbgColor("yellow")}></YellowButton>
    <WhiteButton onClick={() => setbgColor("white")}></WhiteButton>
  </Pallette>
  )
}
