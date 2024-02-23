import logo from './logo.svg';
import './App.css';
import Login from './login/login.js';
import Regi from './regi/regi.js';
import Home from './Home/home.js';

function App() {
  return (
    <div className="App">

      <Login /> 
       <Regi />  
      {/* <Home/> */}
    </div>
  );
}

export default App;
