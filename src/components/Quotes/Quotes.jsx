import { useEffect } from "react";
import { useState } from "react";
import Quote from "../Quote/Quote";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  const getRandomNumber = Math.floor(Math.random() * quotes.length);

  const handleGetQuote = () => {
    setQuote(quotes[getRandomNumber]);
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[0]);
      });
  }, []);

  return (
    <div>
      <button onClick={handleGetQuote}>Next Quote</button>
      <div>
        <Quote quote={quote}></Quote>
      </div>
    </div>
  );
};

export default Quotes;
