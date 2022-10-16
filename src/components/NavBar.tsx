import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react"

const NavBar = () => {
    // come back to fix hover colors
    const styleNav = {
    //   fontFamily: "Courier New",
      backgroundColor: "#ded8ee",
      color: "black",
    }
    const activeStyle = {
        backgroundColor: "#ded8ee",
        color: "black",
    }
  return (
    <div>
        <Menu style={styleNav} inverted tabular>
            <Menu.Item >
                <Link to='/' style={{color: "black"}}>Zion Miller</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to='/projects' style={{color: "black"}}>Projects</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/blog' style={{color: "black"}}>Blog</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/resume' style={{color: "black"}}>Resume</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar