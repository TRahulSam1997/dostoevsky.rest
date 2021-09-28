import React, { useState, useMemo } from "react";
import useFetch from './utils/useFetch'


const App = () => {
  const data = useFetch(
    "/api/rand"
  );

  return (
    <div>
      <h1>Quotes</h1>
      {data.data}
    </div>
  )
}

export default App;