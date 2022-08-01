import logo from './logo.svg';
import './App.css';
import {Button, Badge,Card} from 'react-bootstrap' //For this we have to import in index.js

function App() {
  return (
    <div className="App">
      <h1>Install bootstrap</h1>
      {/* <Button onClick={()=>alert("Hello")}>Click Me</Button> */}

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> 
      <Button variant="link">Link</Button>

      <h1>
        Example heading <Badge bg="secondary" variant="light">New</Badge>
      </h1>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
