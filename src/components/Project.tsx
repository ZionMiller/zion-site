import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SubNav from './SubNav'
import CurrentProject from './CurrentProject';
import PastProjects from './PastProjects';
import { Outlet } from 'react-router-dom';
import { useDevice } from '../hooks/useDevice';

interface ProjectProps {
    activeItem: string;
    onItemClick: (item: string) => void;
  }

const Project = () => {
    const [activeItem, setActiveItem] = useState<string>('project/current');
    const { isTabletOrPhone } = useDevice();

    const renderActiveComponent = () => {
      if (activeItem === "project/current") {
        return <CurrentProject />;
      } else if (activeItem === "project/past") {
        return <PastProjects />;
      } else {
        return null;
      }
    };
    
    return (
      <div className='proj-containter'>
        <SubNav 
            activeItem={activeItem} 
            // onItemClick={(item) => setActiveItem(item)} 
        />
        {activeItem === "project/current" && <CurrentProject />}
        {activeItem === "project/past" && <PastProjects />}
      </div>
    );
}

Project.propTypes = {}

export default Project