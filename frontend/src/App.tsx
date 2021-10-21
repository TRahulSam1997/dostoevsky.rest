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
      <div>
        <p>Created by <a href="https://rahulsam.me/">Rahul</a></p>
      </div>
      <div>
        <a href="https://github.com/TRahulSam1997/dostoevsky.rest">
          <img src="https://img.shields.io/github/stars/TRahulSam1997/dostoevsky.rest?style=social" alt="Github Link"></img>
        </a>
      </div>
    </div>
  )
}

export default App;