import { useEffect } from "react";
import useFetch from './utils/useFetch'

const App = () => {
  const { quote, refetch, loading } = useFetch('/api/rand');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h1>Dostoevsky.rest</h1>
      <p>A REST API for Fyodor Dostoevsky quotes</p>
      <button onClick={refetch}>Quote</button>
      <div>{!quote && loading? "loading..." : quote.data}</div>
    </div>
  )
}

export default App;