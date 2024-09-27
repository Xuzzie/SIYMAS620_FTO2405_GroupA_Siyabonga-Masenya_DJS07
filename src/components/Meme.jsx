import memesData from "../memesData.js";
import React from "react";

export default function Meme() {
  // Had to rewrite sections of the code since i had various bugging issues
  const [memeImage, setMemeImage] = React.useState(""); // react stae allows for the

  function getMemeImage(event) {
    // Prevent form submission and page reload
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <main>
      <form className="form">
        <div>
          <label>Top Text</label>
          <input type="text" placeholder="Shut up" className="form--input" />
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
            />
          </label>
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      {/* Make sure to handle the image if memeImage is empty */}
      {memeImage && <img src={memeImage} alt="Meme" className="meme--image" />}
    </main>
  );
}
