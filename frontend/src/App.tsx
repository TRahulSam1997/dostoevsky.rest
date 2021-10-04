import React, { useState, useEffect } from "react";
import useFetch from './utils/useFetch'
import {Payload} from './utils/useFetch';

const App = () => {
  const [quote, setquote] = useState<Payload>({data: null, loading: true})
  const handleClick = () => setquote(data)

  const data = useFetch(
    "/api/rand"
  );

  return (
    <div>
      <h1>Quotes</h1>
      <button onClick={handleClick}>Get Quote</button>
      <div>{quote.data}</div>
    </div>
  )
}

export default App;