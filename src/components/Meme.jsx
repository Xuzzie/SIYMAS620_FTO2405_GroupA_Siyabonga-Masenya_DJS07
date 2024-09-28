import memesData from "../memesData.js";
import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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

      {/* Wrap image in a div for layout control */}
      <div className="meme--container">
        {meme && (
          <img src={meme.randomImage} alt="Meme" className="meme--image" />
        )}
      </div>
    </main>
  );
}
