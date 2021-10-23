import { useEffect } from "react";
import useFetch from './utils/useFetch'
import {Button, Container, Row, Col, Card, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const { quote, refetch, loading } = useFetch('/api/rand');

  useEffect(() => {
    refetch();
  }, []);

  let obj = JSON.parse(!quote.data? '{}' : quote.data);
  return (
    <div id = "mainContainer">
      <Container>
        <Card style={{ width: '38rem' }}>
          <Card.Body>
            <Card.Title className="mb-2"><strong>Dostoevsky.Rest</strong></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">A REST API for <a href="https://en.wikipedia.org/wiki/Fyodor_Dostoevsky">Fyodor Dostoevsky</a> quotes</Card.Subtitle>
            <Card.Text>
            <div className="mb-4 mt-4">
              <Button onClick={refetch} variant="primary" size="sm"> Get Quote</Button><span style={{ fontFamily: "Monaco, Lucida Console, monospace" }}> curl api.dostoevsky.rest</span>
            </div>
          <div>
            <p>
              "{!quote && loading? "loading..." : obj.quote}"
            </p>
          </div>
            </Card.Text>
            <p>Created by <Card.Link href="https://rahulsam.me/">Rahul</Card.Link></p>
            <div>
              <a href="https://github.com/TRahulSam1997/dostoevsky.rest">
                <img src="https://img.shields.io/github/stars/TRahulSam1997/dostoevsky.rest?style=social" alt="Github Link"></img>
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="mt-3" style={{ width: '38rem' }}>
        <Card.Header><strong>Dostoevsky's Greatest Books</strong></Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item><a href="https://www.amazon.com.au/Brothers-Karamazov-Fyodor-Dostoyevsky/dp/0140449248/">The Brothers Karamazov</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.amazon.com.au/Crime-Punishment-Fyodor-Dostoevsky/dp/0099981904">Crime and Punishment</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.amazon.com.au/Notes-Underground-Penguins-Fyodor-Dostoyevsky/dp/0141194863">Notes from Underground</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.amazon.com.au/Idiot-Fyodor-Dostoyevsky/dp/014044792X/">The Idiot</a></ListGroup.Item>
          </ListGroup>
        </Card>
        <Row>
          <Col>
            <p className="mt-3" style={{ marginLeft: 2 }}>Inspired by <Card.Link href="https://kanye.rest/">Kanye.rest</Card.Link></p>
          </Col>
          <Col>
            <div className="mb-2 text-md-right" style={{float: "right" }}>
              <a href="https://www.digitalocean.com/?refcode=d75c4805ed25&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;