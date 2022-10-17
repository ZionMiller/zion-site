import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


const Resume = () => {

  const resumeStyle = { height: "1035px", width: "100%", overflow: "auto" }
  const buttonStyle = {display: "initial", position: "absolute", top: "15px",left: "15px", backgroundColor: "#e8eed8"}
  
  const resumeView = "https://docs.google.com/document/d/16fdFtL-WMx6cB4f7f2qcl_xXRg83pA0N5B6cglw_puM/preview?usp=sharing"
  const resumeDownload = "https://docs.google.com/document/d/16fdFtL-WMx6cB4f7f2qcl_xXRg83pA0N5B6cglw_puM/export?format=pdf"

  return (
    <div style={{position: "relative"}}>
      <Button style={buttonStyle} href={resumeDownload}>Download <Icon name="file pdf"/></Button>
      <iframe id='resume-frame' src={resumeView} style={resumeStyle}></iframe>
    </div>
  )
}

export default Resume