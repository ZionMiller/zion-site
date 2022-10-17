import React from 'react'
import { Card, Button, Image, Menu, Icon } from 'semantic-ui-react'

const Projects = () => {
  return (
    <Card.Group>
    <Card style={{backgroundColor: "#e8eed8"}}>
      <Card.Content>
        <Image
          floated='right'
          size='large'
          src={require("../Images/biobreak_logo.png")}
        />
        <Card.Meta>Biotech equity GUI</Card.Meta>
        <Card.Description>
        <strong>Description</strong>: Steve wants to add you to the group 
        </Card.Description>
        <Card.Description>
        <strong>Role</strong>: Sole developer
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons' style={{backgroundColor: "#ded8ee"}}>
          <Button basic color='black'>
            View Demo
          </Button>
          <Button basic color='black'>
            Test App
          </Button>
          <Button basic color='black'>
            View Repo
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card style={{backgroundColor: "#e8eed8"}}>
      <Card.Content>
        <Image
          floated='right'
          size='medium'
          src={require("../Images/CodersKeys.png")}
        />
        <Card.Meta>Coder Cheat Sheet</Card.Meta>
        <Card.Description>
        <strong>Description</strong>: One stop shop for snippets and shortcuts 
        </Card.Description>
        <Card.Description>
        <strong>Role</strong>: Ideation, front end functionality
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Menu.Item
            href="https://github.com/nickwarren47/phase2-react-project"
            // position="right"
            target="_blank"
        >
            <Icon name="github" size="large" /> View Github
        </Menu.Item>
      </Card.Content>
    </Card>
  </Card.Group>
  )
}

export default Projects