import logo from './logo.svg';
import './App.css';
 import User from './User';

function App() {
  function getName(name){
    alert(name);
  }
  return (
    <div className="App">
      <h1>Lifting State up</h1>
      <User getData={getName}/>
    </div>
  );
}

export default App;
