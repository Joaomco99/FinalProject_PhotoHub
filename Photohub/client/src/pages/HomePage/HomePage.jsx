import "./HomePage.css";

import React from 'react';

function App() {
  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet" />
      <style>
        {`
          .custom-font {
            font-family: 'Rubik', sans-serif;
          }
        `}
      </style>

      <div className="welcome_to_page_container">
        <img className="welcome_image" src="https://i.ibb.co/rbt35Wz/IMG-5702.jpg" alt="welcome" />

        <br /><br />
        <h1 className="welcome_to_page_text">
          <span className="first_line">
            Welcome to <span className="PhotoHub">PhotoHub!</span>
          </span>
        </h1>
        <p>
          Welcome to Photohub, the ultimate app for photographers, designers, and artists of all kinds. With Photohub, you have a dedicated space to showcase your unique creations and connect with a vibrant community of like-minded individuals! It doesn't guarantee finding a great bottle that truly complements your mood. But don't worry, we've got you covered! Just follow the vibe you're looking for, and we already have the perfect bottles waiting for you to discover.
        </p>
      </div>

      <footer>
        <div className="Xan13">
          <p>© 2023 PhotoHub from Xan13</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;



