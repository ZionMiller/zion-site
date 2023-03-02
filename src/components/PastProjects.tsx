import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Card, Button, Image, Menu, Icon } from 'semantic-ui-react'

const PastProjects = () => {

  return (
    <div>
        <br></br>
        <Card.Group centered marginTop="10px">
            <Card style={{backgroundColor: "#e8eed8"}}>
            <Card.Content>
                <Image
                floated='right'
                size='large'
                src={require("../Images/biobreak_logo.png")}
                />
                <Card.Meta>Biotech equity GUI</Card.Meta>
                <Card.Description>
                <strong>Description</strong>: BioBreak helps biotech investors save time with novel data visualizations containing KPIs buried deep in SEC filings, clinical trials, and more. What used to take countless tabs and hours of careful reading can now be done at the click of a button.
                </Card.Description>
                <Card.Description>
                    <br></br>
                <strong>Role</strong>: Sole developer (React Frontend, Rails Backend)
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Menu.Item
                        href="https://biobreak.herokuapp.com/snapshot"
                        // position="right"
                        target="_blank"
                        style={{marginRight: "15px"}}
                >
                        <Icon name="computer" size="large" /> Test App
                </Menu.Item>
                <Menu.Item
                    href="https://github.com/ZionMiller/biobreak"
                    // position="right"
                    target="_blank"
                >
                    <Icon name="github" size="large" /> View Repo
                </Menu.Item>
            </Card.Content>
            </Card>

            <Card style={{backgroundColor: "#e8eed8"}}>
            <Card.Content>
                <Image
                floated='right'
                size='medium'
                src={require("../Images/Flights.png")}
                />
                <Card.Meta>Flight Finder</Card.Meta>
                <Card.Description>
                <strong>Description</strong>: Flight Finder ranks the cheapest flights to the desired destination based on surrounding airports in a specified circumference
                </Card.Description>
                <br></br>
                <Card.Description>
                <strong>Role</strong>: Ideation, full stack engineer
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Menu.Item
                    href="https://github.com/ZionMiller/flight-positioning-app"
                    // position="right"
                    target="_blank"
                >
                    <Icon name="github" size="large" /> View Repo
                </Menu.Item>
            </Card.Content>
            </Card>
            <Card style={{backgroundColor: "#e8eed8"}}>
            <Card.Content>
                <Image
                floated='right'
                size='medium'
                src={require("../Images/CardGamee.png")}
                />
                <Card.Meta>Card Game</Card.Meta>
                <Card.Description>
                <strong>Description</strong>: A project built in a week to emulate Hearthstone basic gameplay with unlikely combatants such as a baby versus the IRS. The project was built using React and Rails
                </Card.Description>
                <br></br>
                <Card.Description>
                <strong>Role</strong>: full stack engineer
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Menu.Item
                    href="https://github.com/Garret-Gallant/Phase-3-Project-Backend"
                    // position="right"
                    target="_blank"
                    style={{marginRight: "15px"}}
                >
                    <Icon name="github" size="large" /> Backend
                </Menu.Item>
                <Menu.Item
                    href="https://github.com/ZionMiller/phase-3-project-front-end-"
                    // position="right"
                    target="_blank"
                >
                    <Icon name="github" size="large" /> Frontend
                </Menu.Item>
            </Card.Content>
            </Card>
            <Card style={{backgroundColor: "#e8eed8"}}>
            <Card.Content>
                <Image
                floated='right'
                size='medium'
                src={require("../Images/coderkeys.png")}
                />
                <Card.Meta>Coder Cheat Sheet</Card.Meta>
                <Card.Description>
                <strong>Description</strong>: One-stop shop for snippets and shortcuts 
                </Card.Description>
                <Card.Description>
                <strong>Role</strong>: Ideation, front end engineer
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Menu.Item
                    href="https://github.com/nickwarren47/phase2-react-project"
                    // position="right"
                    target="_blank"
                >
                    <Icon name="github" size="large" /> View Repo
                </Menu.Item>
            </Card.Content>
            </Card>

            <Card style={{backgroundColor: "#e8eed8"}}>
            <Card.Content>
                <Image
                floated='right'
                size='medium'
                src={"https://i.ibb.co/Wfn9rHr/tumblr-mfoibvy2v41rfjowdo1-500.gif"}
                />
                <Card.Meta>Ghibli Film Reviews</Card.Meta>
                <Card.Description>
                <strong>Description</strong>: Consolidated details and reviews on all things Studio Ghibli
                </Card.Description>
                <Card.Description>
                    <br></br>
                <strong>Role</strong>: Front end engineer
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Menu.Item
                    href="https://github.com/ZionMiller/ghibli-project"
                    // position="right"
                    target="_blank"
                >
                    <Icon name="github" size="large" /> View Repo
                </Menu.Item>
            </Card.Content>
            </Card>
            <Card style={{backgroundColor: "#e8eed8"}}>
            <Card.Content>
                <Image
                floated='right'
                size='medium'
                src={require("../Images/Flashcards.png")}
                />
                <Card.Meta>Flashcard App</Card.Meta>
                <Card.Description>
                <strong>Description</strong>: Flashcard app designed to help myself and fellow Flatiron students study our first phase of JavaScript
                </Card.Description>
                <Card.Description>
                    <br></br>
                <strong>Role</strong>: Front end engineer
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Menu.Item
                    href="https://github.com/ZionMiller/Flatiron-flash-cards"
                    // position="right"
                    target="_blank"
                >
                    <Icon name="github" size="large" /> View Repo
                </Menu.Item>
            </Card.Content>
            </Card>
    </Card.Group>

    </div>
  )
}

export default PastProjects