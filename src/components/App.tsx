import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Card } from "semantic-ui-react";

import NavBar from './NavBar';
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Blog from './Blog';
import Resume from './Resume';
import Footer from './Footer';
import '../App.css';

function App() {

  const [articles, setArticles] = useState<any[]>([])

  // interface mediumBlogDetails {
  //   title:
  //   description:
  //   link:
  // }

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zionmiller";

  useEffect(() => {
    fetch(mediumURL)
    .then(res => res.json())
    .then(mediumRes => setArticles(mediumRes.items))
}, [])

console.log(articles[0])

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/blog' element={
          
          <Card.Group itemsPerRow={4}>
            {
              articles.map((article) => (
                <Blog 
                  thumbnail={article.thumbnail}
                  title={article.title}
                  description={article.description.substring(4, 100)}
                  link={article.link}
                />
              ))         
            }
        
         </Card.Group>

          }/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
