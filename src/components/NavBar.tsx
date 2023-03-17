import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

interface NavState {
  activeItem: string;
}

const NavBar: React.FC = () => {
  const [state, setState] = useState<NavState>({ activeItem: "home" });
  const handleItemClick = (itemName: string) => {
    setState({ activeItem: itemName });
  };

  const styleNav = {
    backgroundColor: "#ded8ee",
    color: "black",
    width: "100%",
  };

  const activeStyle = {
    backgroundColor: "#e8eed8",
    color: "white",
  };

  return (
    <div>
      <Menu style={styleNav}>
        <Menu.Item
          active={state.activeItem === "home"}
          onClick={() => handleItemClick("home")}
          style={state.activeItem === "home" ? activeStyle : {}}
        >
          <Link to="/">
            <h3>Zion Miller</h3>
          </Link>
        </Menu.Item>
        <Menu.Item
          active={state.activeItem === "projects"}
          onClick={() => handleItemClick("projects")}
          style={state.activeItem === "projects" ? activeStyle : {}}
          position="right"
        >
          <Link to="/project">
            <h3>Projects</h3>
          </Link>
        </Menu.Item>
        <Menu.Item
          active={state.activeItem === "blog"}
          onClick={() => handleItemClick("blog")}
          style={state.activeItem === "blog" ? activeStyle : {}}
        >
          <Link to="/blog">
            <h3>Blog</h3>
          </Link>
        </Menu.Item>
        <Menu.Item
          active={state.activeItem === "resume"}
          onClick={() => handleItemClick("resume")}
          style={state.activeItem === "resume" ? activeStyle : {}}
        >
          <Link to="/resume">
            <h3>Resume</h3>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
