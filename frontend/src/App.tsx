import React, { useState, useMemo } from "react";
import useFetch from './utils/useFetch'


const App = () => {
  const data = useFetch(
    "/api/rand"
  );

  return (
    <div>
      <h1>Quotes</h1>
      <button>Get Quote</button>
      <div>{data.data}</div>
    </div>
  )
}

export default App;