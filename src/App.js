import logo from "./logo.svg";
import "./App.css";
import { IoRefresh } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [array, setArray] = useState([2, 4, 5, 6, 7]);
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });
  function getQuote() {
    axios
      .get("https://api.quotable.io/random")
      .then((quote) => {
        console.log(quote.data);
        setQuote({
          quote: quote.data.content,
          author: quote.data.author,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Random Quote <span className="head-span">Generator 💡</span>
        </h1>
        <div className="quotecard">
          <p className="quote">"{quote.quote}"</p>
          <p className="author">{quote.author}</p>
        </div>
        <button
          onClick={() => {
            getQuote();
          }}
          className="btn"
        >
          <IoRefresh color="#4a00e0" size="2.2em" />
        </button>
        {/* {array.map((item, index) => {
          return <p key={index}>{item}</p>;
        })} */}
      </header>
    </div>
  );
}

export default App;
