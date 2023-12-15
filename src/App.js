// import React, { useState } from 'react';
// import data from './data';
// function App() {
  
  
//   return (
//   <h2>lorem ipsum project setup</h2>
//     )
// }

// export default App;


import React, { useState } from "react";
import data from "./data";

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([""]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setText(data.slice(0, input));
  }

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs</label>
        <input
          value={input}
          type="number"
          id="amount"
          min="0"
          max={data.length}
          name="amount"
          onChange={handleChange}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

