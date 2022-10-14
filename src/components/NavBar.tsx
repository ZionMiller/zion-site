import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react"

const NavBar = () => {
  return (
    <div>
        <Menu>
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
                <Link to='/contact'>contact</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar