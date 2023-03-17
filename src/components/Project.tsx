import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDevice } from "../hooks/useDevice";
import { Menu } from "semantic-ui-react";

const Project = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { isTabletOrPhone } = useDevice();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/project") {
      navigate("/project/current");
      setActiveItem("/project/current");
    } else {
      setActiveItem(location.pathname);
    }
  }, [location.pathname, navigate]);

  const styleNav = {
    backgroundColor: "#ded8ee",
    display: "flex",
    justifyContent: "center",
  };

  const activeStyle = {
    backgroundColor: "#e8eed8",
    color: "white",
  };

  return (
    <div className="proj-containter">
      <Menu style={styleNav}>
        <Menu.Item style={activeItem === "/project/current" ? activeStyle : {}}>
          <Link to="/project/current">
            <h3>Current Project</h3>
          </Link>
        </Menu.Item>
        <Menu.Item style={activeItem === "/project/past" ? activeStyle : {}}>
          <Link to="/project/past">
            <h3>Past Projects</h3>
          </Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </div>
  );
};

Project.propTypes = {};

export default Project;
