import React, { useState, useEffect } from "react";
import { Navigation } from '.';


export default function Parent() {
  const initialData = [{"message":"Empty empty empty","id":100,"createdAt":"00000000000000"}]
  const erro = "Fetching......"
  const [quotes, setQuotes] = useState(initialData);
  const [err, setErr] = useState(erro);

  const getQuotes = () => {
    const url = `https://mern-quotes-crud.herokuapp.com/api/quotes`;
    fetch(url)
      .then(response => response.json())
      .then(resData => setQuotes(resData)
      )
      .catch(error => setErr(error))
      .then(function () {
        setErr('No Error in Fetching using Fetch API')
      });
  }

  useEffect(() => {
    setTimeout(() => {getQuotes()}, 1200);
}, [])
  
  return (
    <div className="page rest fx fxjcc fxdc">
     <Navigation/>
     <span style={{ textAlign: "center" }}>{err}</span>
     <div className="quotes">
     {quotes.map(quote => (
        <li style={{ padding: "10px" }} key={quote.id}>
          <b style={{ color: "yellow" }}> ID. {quote.id}: </b><span> Quote: </span> {quote.message}
        </li>
      ))}
     </div>

    </div>
  );
}