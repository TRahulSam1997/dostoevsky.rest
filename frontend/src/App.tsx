import { useEffect } from "react";
import useFetch from './utils/useFetch'
import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { quote, refetch, loading } = useFetch('/api/rand');

  useEffect(() => {
    refetch();
  }, []);

  let obj = JSON.parse(!quote.data? '{}' : quote.data);
  return (
    <div id = "mainContainer">
      <Container>
        <Card>

        </Card>
        <div>
        <h1>Dostoevsky.rest</h1>
          <p>A REST API for Fyodor Dostoevsky quotes</p>
        </div>
        <div>
          <Button onClick={refetch} variant="primary" size="sm">Quote</Button>
        </div>
        <div>
          {!quote && loading? "loading..." : obj.quote}
          </div>
        <div>
          <p>Created by <a href="https://rahulsam.me/">Rahul</a></p>
        </div>
        <div>
          <a href="https://github.com/TRahulSam1997/dostoevsky.rest">
            <img src="https://img.shields.io/github/stars/TRahulSam1997/dostoevsky.rest?style=social" alt="Github Link"></img>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default App;