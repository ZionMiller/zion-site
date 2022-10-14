import React from 'react'
import { Table, Icon, Menu } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div style=
    {{
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "100px",
    }}>
        
    <Table  style={{backgroundColor: "#f0ead6", textAlign: "center"}}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
        Put language icons here
       </Table.Cell>
        <Table.Cell>
            About
          <br></br>
            Projects
          <br></br>
            Blog
          <br></br>
            Contact
          <br></br>
        </Table.Cell>
          <h3 style={{alignItems: "center"}}>Zion Miller</h3>
            <Menu.Item
            href="https://github.com/ZionMiller"
            position="right"
            target="_blank"
          >
            <Icon name="github" size="big" />
          </Menu.Item>
          <Menu.Item
            href="https://www.linkedin.com/in/zion-miller-b15344170/"
            position="right"
            target="_blank"
          >
            <Icon name="linkedin" size="big" />
          </Menu.Item>
          <Menu.Item
            href="https://medium.com/@zionmiller"
            position="right"
            target="_blank"
          >
            <Icon name="medium" size="big" />
        </Menu.Item>
      </Table.Row>
    </Table.Body>
  </Table>
</div>
  )
}

export default Footer