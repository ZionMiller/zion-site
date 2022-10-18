import React from 'react'
import { Table, Icon, Menu, Image } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div style=
    {{
    bottom: "0",
    left: "0",
    position: "relative", //changed to relative from fixed also works if position is not there
    marginTop: "25px",
    width: "100%",
    backgroundColor: "#ded8ee"
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