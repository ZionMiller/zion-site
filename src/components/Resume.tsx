import React from 'react'

const Resume = () => {

  const resumeStyle = { height: "1035px", width: "100%", overflow: "auto" }
  return (
    <div>
      <iframe id='resume-frame' src="https://docs.google.com/document/d/16fdFtL-WMx6cB4f7f2qcl_xXRg83pA0N5B6cglw_puM/preview?usp=sharing" style={resumeStyle}></iframe>
    </div>
  )
}

export default Resume