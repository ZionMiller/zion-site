import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

interface mediumProps {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

const Blog: React.FC<mediumProps> = ({thumbnail, title, description, link}) => {

    const cardStyle = {backgroundColor: "#e8eed8"}
    const imageStyle = {}
    const buttonStyle = {backgroundColor: "#ded8ee"}

return (
    // <div style={{alignContent: "center"}}>Blog Feed coming soon!</div>
    <Card style={cardStyle}>
        <Card.Content>
            <Image src={thumbnail}></Image>
            <h1>{title}</h1>
            <h3>{description}...</h3>
            <Button style={buttonStyle} href={link} target="_blank" rel="noopener noreferrer">Read Article</Button>
        </Card.Content>
    </Card>
  )
}

export default Blog
