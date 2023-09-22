/* eslint-disable react/prop-types */
const Quote = ({ quote }) => {
  //   const { text, author } = quote;
  console.log(quote);
  return (
    <div>
      <h2> {quote?.text} </h2>
      <p> - {quote?.author}</p>
    </div>
  );
};

export default Quote;
