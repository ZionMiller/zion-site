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
                <p>
                <Image
                    src={require("../Images/zion-prof.png")}
                    circular
                    centered
                    alt='profile pic'
                    size='large'
                />
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
                    <Icon name="github" size="big" /> Github
                </Menu.Item>
                <Menu.Item
                    href="https://www.linkedin.com/in/zion-miller-b15344170/"
                    position="right"
                    target="_blank"
                >
                    <Icon name="linkedin" size="big" /> Linkedin
                </Menu.Item>
                <Menu.Item
                    href="https://mobile.twitter.com/zion_code"
                    position="right"
                    target="_blank"
                >
                    <Icon name="twitter" size="big" /> Twitter
                </Menu.Item>
                <Menu.Item
                    href="mailto:zionmillerbusiness@gmail.com"
                    position="right"
                    target="_blank"
                >
                    <Icon name="mail" size="big" /> Email
                </Menu.Item>
                <Menu.Item
                    href="/resume"
                >
                    <Icon name="sticky note" size="big" /> Resume
                </Menu.Item>
            </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    </div>
  )
}

export default LandingPage