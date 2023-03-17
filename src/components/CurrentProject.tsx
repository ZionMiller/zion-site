import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "semantic-ui-react";
import { useDevice } from "../hooks/useDevice";

const CurrentProject = () => {
  const { isTabletOrPhone } = useDevice();

  return (
    <div>
      {isTabletOrPhone ? (
        <div className="proj">
          <h3>I created and Maintain BioBreak</h3>
          <Menu.Item
            href="https://github.com/biobreak"
            position="right"
            target="_blank"
          >
            <Icon name="github" size="big" /> Click here for Github ReadME and
            Demo
          </Menu.Item>
          <p>
            *We are launching a paid subscription so our code is private. Please
            contact me if you would like to explore the code base and or ask any
            questions about it!
          </p>
          <div style={{ maxWidth: '600', maxHeight: '100%' }}>
          <iframe
            src="https://www.youtube.com/embed/OSvQ1FB_MKY"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          </div>
        </div>
      ) : (
        <div>
          <h3>I created and Maintain BioBreak</h3>
          <Menu.Item
            href="https://github.com/biobreak"
            position="right"
            target="_blank"
          >
            <Icon name="github" size="big" /> Click here for Github ReadME and
            Demo
          </Menu.Item>
          <p>
            *We are launching a paid subscription so our code is private. Please
            contact me if you would like to explore the code base and or ask any
            questions about it!
          </p>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/OSvQ1FB_MKY"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

CurrentProject.propTypes = {};

export default CurrentProject;
