import { useEffect } from "react";
import useFetch from './utils/useFetch'

const App = () => {
  const { quote, refetch, loading } = useFetch('/api/rand');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <button onClick={refetch}>Get Quote</button>
      <div>{!quote && loading? "loading..." : quote.data}</div>
    </div>
  )
}

export default App;