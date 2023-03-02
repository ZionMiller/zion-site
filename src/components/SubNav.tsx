import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu } from "semantic-ui-react"

interface SubNavState {
    activeItem: string;
  }

  interface ProjectProps {
    activeItem: string;
  }


const SubNav = (props: ProjectProps) => {

    const [state, setState] = useState<SubNavState>({ activeItem: '/project/current' });  
    const handleSelection = (itemName: string) => {
      setState({ activeItem: itemName });
    };

    
    const styleNav = {
        backgroundColor: "#ded8ee",
        display: 'flex', 
        justifyContent: 'center' 
      }
      
      const activeStyle = {
        backgroundColor: "#e8eed8",
        color: "white",
      }

  return (
    <div >
        <Menu style={styleNav}>
            <Menu.Item 
                active={state.activeItem === '/project/current'}
                onClick={() => handleSelection('/project/current')}
                style={state.activeItem === '/project/current' ? activeStyle : {}}
            >
                <Link to='/project/current'><h3>Current Project</h3></Link>
            </Menu.Item>
            <Menu.Item 
                active={state.activeItem === '/project/past'}
                onClick={() => handleSelection('/project/past')}
                style={state.activeItem === '/project/past' ? activeStyle : {}}
            >
                <Link to='/project/past'><h3>Past Projects</h3></Link>
            </Menu.Item>
        </Menu>
        <Outlet />
    </div>
  )
}

SubNav.propTypes = {}

export default SubNav