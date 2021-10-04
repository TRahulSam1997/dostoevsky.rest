import React, { useState, useEffect } from "react";
import useFetch from './utils/useFetch'
import {Payload} from './utils/useFetch';

const App = () => {
  // const [quote, setquote] = useState<Payload>({data: null, loading: true})

  const { quote, refetch, loading } = useFetch('/api/rand');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <button onClick={refetch}>Get Quote</button>
      <div>{quote.data}</div>
    </div>
  )
}

export default App;