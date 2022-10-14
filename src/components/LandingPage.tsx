import React from 'react'
import { Divider, Grid, Image, Segment, Menu, Icon } from 'semantic-ui-react'

const LandingPage = () => {
  return (
    <div>
        <br></br>
        <h2>
            Software Engineer | Surfer | Unhealthyly Obsessed Watch Enthusiast 
        </h2>
        <br></br>
            <Segment>
            <Grid columns={2} relaxed='very' style={{backgroundColor: "#e8eed8"}}>
            <Grid.Column style={{display: "flex", alignItems: "center"}}>
                <Image
                    src={require("../Images/zion-prof.png")}
                    circular
                    centered
                    alt='profile pic'
                    size='large'
                />
                <p>
                Equity Analyst & Entrepreneur turned full-stack software engineer. I am a recent Flatiron School graduate and am eager for opportunities to break into the tech industry. 
                Open to any full-time opportunities in software engineering.
                </p>
            </Grid.Column>
            <Grid.Column>
                <h2>Contact & Socials</h2>
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
            </Grid.Column>
            </Grid>

            <Divider vertical></Divider>
        </Segment>
    </div>
  )
}

export default LandingPage