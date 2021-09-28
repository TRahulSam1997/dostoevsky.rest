import React, { useState, useMemo } from "react";
import useFetch from './utils/useFetch'


const App = () => {
  const data = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  return (
    <div>
      <h1>Quotes</h1>
      {data}
    </div>
  )
}

export default App;