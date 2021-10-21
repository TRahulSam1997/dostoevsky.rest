import { useEffect } from "react";
import useFetch, {Payload} from './utils/useFetch'

const App = () => {
  const { quote, refetch, loading } = useFetch('/api/rand');

  useEffect(() => {
    refetch();
  }, []);

  let obj = JSON.parse(!quote.data? '{}' : quote.data);
  return (
    <div>
      <h1>Dostoevsky.rest</h1>
      <p>A REST API for Fyodor Dostoevsky quotes</p>
      <button onClick={refetch}>Quote</button>
      <div>{!quote && loading? "loading..." : obj.quote}</div>
    </div>
  )
}

export default App;