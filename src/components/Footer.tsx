import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiReact,
  SiRubyonrails,
  SiGit,
  SiPostgresql,
  SiJest,
  SiPython,
} from "react-icons/si";

const Footer = () => {
  return (
    <>
      <h3>Technologies Used</h3>
      <div className="technology-stack text-slate-500">
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiJavascript />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiTypescript />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiReact />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiPython />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiRuby />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiRubyonrails />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiGit />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiPostgresql />
        </div>
        <div className="icon-container p-2 shadow-md rounded-lg">
          <SiJest />
        </div>
      </div>
    </>
  );
};

export default Footer;
