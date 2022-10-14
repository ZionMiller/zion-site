import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

const LandingPage = () => {
  return (
    <div>
        <h2>
            Zion Miller
        </h2>
            <Segment>
            <Grid columns={2} relaxed='very'>
            <Grid.Column>
                <p>
                Equity Analyst & Entrepreneur turned full-stack software engineer. I am a recent Flatiron School graduate and am eager for opportunities to break into the tech industry. 
                Open to any full-time opportunities in software engineering.
                </p>
            </Grid.Column>
            <Grid.Column>
                
            </Grid.Column>
            </Grid>

            <Divider vertical></Divider>
        </Segment>
    </div>
  )
}

export default LandingPage