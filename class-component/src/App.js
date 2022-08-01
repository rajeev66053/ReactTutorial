import logo from './logo.svg';
import './App.css';
import User from './component/User';

function App() {
  //Define component inside component
  function Apple(){
    return <h1>Apple</h1>
  }
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <User />
      {/* We can use the component like {Apple()} or <Apple /> */}
      {Apple()}
      <Apple />
    </div>
  );
}

export default App;
