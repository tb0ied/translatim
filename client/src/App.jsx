import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  //store our from and to languages in state
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");

  // store the word we want to translate in state
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState({});

  //on change function for the input of the word we want to translate

  //onsubmit function that calls our API to  get the translation
  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost:8080/translate?word=hello&from=en&to=es`;
    const res = await axios.get(API);
    console.log(res.data);
  }
  return (
    <>
      <form>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input placeholder="Translate" />
        </div>
      </form>
    </>
  );
}

export default App;
