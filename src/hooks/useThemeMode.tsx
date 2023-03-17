import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const useThemeMode = () => {

    const [isBackgroundDark, setIsBackgroundDark] = useState(false);

    const backgroundColor = isBackgroundDark ? "black" : "white";
    const color = isBackgroundDark ? "white" : "black";
    
    function handleToggleBackground() {
        setIsBackgroundDark(prevIsBackgroundDark => !prevIsBackgroundDark);
      }

  return (
    <div></div>
  )
}
