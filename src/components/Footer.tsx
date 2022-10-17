import React from 'react'
import { Table, Icon, Menu, Image } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div style=
    {{
    // fontSize: "small",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    // backgroundColor: "#ded8ee"
    }}>
        <h3>Technologies Used</h3>
        <Image
            src={require("../Images/techs.png")}
            style={{position: "relative", height: "80px", display: "block", marginLeft: "auto", marginRight: "auto"}}

        />
</div>
  )
}

export default Footer