import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Card } from "semantic-ui-react";

import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Projects from "./PastProjects";
import Blog from "./Blog";
import Resume from "./Resume";
import "../App.css";
import { useBlogs } from "../hooks/useBlogs";
import { useDevice } from "../hooks/useDevice";
import PastProjects from "./PastProjects";
import Project from "./Project";
import CurrentProject from "./CurrentProject";

interface RSSFeedItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

function App() {
  // const { articles } = useBlogs();
  const { isTabletOrPhone } = useDevice();
  const [articles, setArticles] = useState<RSSFeedItem[]>([]);

  const regex = /(<([^>]+)>)/gi;
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zionmiller";

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((mediumRes) => setArticles(mediumRes.items));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<Project />}>
          <Route path="/project/current" element={<CurrentProject />} />
          <Route path="/project/past" element={<PastProjects />} />
        </Route>
        <Route
          path="/blog"
          element={
            <Card.Group itemsPerRow={4}>
              {articles.map((article) => (
                <Blog
                  thumbnail={article.thumbnail}
                  title={article.title}
                  description={article.description
                    .substring(0, 150)
                    .replace(regex, "")}
                  link={article.link}
                />
              ))}
            </Card.Group>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
