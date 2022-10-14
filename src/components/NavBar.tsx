import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react"

const NavBar = () => {
    const styleNav = {
      fontFamily: "Courier New",
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
            <Menu.Item>
                <Link to='/'>Zion Miller</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to='/projects'>Projects</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/blog'>Blog</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/resume'>Resume</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar