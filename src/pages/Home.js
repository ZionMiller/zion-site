import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <About />
      <Experience />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Home;
