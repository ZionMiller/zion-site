import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react"

const NavBar = () => {
    // come back to fix hover colors
    const styleNav = {
    //   fontFamily: "Courier New",
      backgroundColor: "#ded8ee",
      color: "black",
      width: "100%",
    }
    const activeStyle = {
        backgroundColor: "#ded8ee",
        color: "black",
    }
  return (
    <div>
        <Menu style={styleNav} inverted tabular>
            <Menu.Item >
                <Link to='/' style={{color: "black"}}><h3>Zion Miller</h3></Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to='/projects' style={{color: "black"}}><h3>Projects</h3></Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/blog' style={{color: "black"}}><h3>Blog</h3></Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/resume' style={{color: "black"}}><h3>Resume</h3></Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar