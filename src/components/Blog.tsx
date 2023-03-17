import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { useDevice } from "../hooks/useDevice";

interface mediumProps {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

const Blog: React.FC<mediumProps> = ({
  thumbnail,
  title,
  description,
  link,
}) => {
  const { isTabletOrPhone } = useDevice();

  const cardStyle = { backgroundColor: "#e8eed8" };
  const imageStyle = { height: "165px" };
  const buttonStyle = { backgroundColor: "#ded8ee" };

  return (
    <>
      {isTabletOrPhone ? (
        <div>
          <br></br>
          <Card.Group marginTop="10px" itemsPerRow={1}>
            <Card style={cardStyle}>
              <Card.Content>
                <Image src={thumbnail} style={imageStyle}></Image>
                <Card.Header>{title}</Card.Header>
                <Card.Description>{description}...</Card.Description>
                <Button
                  style={buttonStyle}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      ) : (
        <Card style={cardStyle}>
          <Card.Content>
            <Image src={thumbnail} style={imageStyle}></Image>
            <Card.Header>{title}</Card.Header>
            <Card.Description>{description}...</Card.Description>
            <Button
              style={buttonStyle}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Article
            </Button>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default Blog;
