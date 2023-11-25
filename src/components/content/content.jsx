import React from "react";
import { cheatsheet } from "../../db/cheatsheet";
import "./../../scss/content.scss";

const Content = () => {
  return (
<div className="content-container">
      <h2>Lista notatek</h2>
        <div className="notes">
        {cheatsheet.map((note, index) => ( 
          <li key={index}>{note}</li>
          
        ))}
        </div>
    </div>
  );
};

export default Content;