import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'semantic-ui-react'

const CurrentProject = () => {
  return (
    <div>
        <h3>I created and Maintain BioBreak</h3> 
        <Menu.Item
            href="https://github.com/biobreak"
            position="right"
            target="_blank"
        >
            <Icon name="github" size="big" /> Click here for Github ReadME and Demo
        </Menu.Item>
        <p>*We are launching a paid subscription so our code is private. Please contact me if you would like to explore the code base and or ask any questions about it!</p>
        <video controls width="640" height="360">
            <source src="../Images/BB_Preview_2_23_23.mov"type="video/mov" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

CurrentProject.propTypes = {}

export default CurrentProject