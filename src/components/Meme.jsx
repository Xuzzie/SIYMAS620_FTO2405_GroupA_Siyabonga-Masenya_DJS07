export default function Meme() {
  return (
    <main>
      <form className="form" action="">
        <input type="text" className="form--input" placeholder="Top text" />
        <input
          type="text"
          className="form--input"
          placeholder=" Bottom text "
        />
        <button>Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
