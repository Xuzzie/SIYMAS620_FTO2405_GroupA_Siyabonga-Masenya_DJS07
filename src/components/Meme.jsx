import memesData from "../memesData.js";
import React from "react";

export default function Meme() {
  // Move useState outside of the getMemeImage function
  const [memeImage, setMemeImage] = React.useState("");

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
      <div className="meme--container">
        {memeImage && (
          <img src={memeImage} alt="Meme" className="meme--image" />
        )}
      </div>
    </main>
  );
}
