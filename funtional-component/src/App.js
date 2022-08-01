import logo from './logo.svg';
import './App.css';
// Staff is exported directly and User is exported default
import User, { Staff }  from './component/User';

function App() {
  return (
    <div className="App">
      <h1> Hello World !</h1>
      {/* To use user component  */}
      <User /> 
      {/* Don't need to import member if exist in same file  */}
      <Member/>
      <Staff />
    </div>
  );
}

function Member() {
  return (
    // If there are multiple element it must be wrapped in div element otherwise it will throw error.
    <div className="App">
      <h1> Hello Member !</h1>
      <h1> Good Morning !</h1>
    </div>
  );
}

export default App;
