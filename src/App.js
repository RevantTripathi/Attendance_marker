import logo from './logo.svg';
import './App.css';
import Login from './login/login.js';
import Regi from './regi/regi.js';
import Home from './Home/home.js';
import Avatar from './Home/avatar.jpg';

function App() {
  return (
    <div className="App">

      {/* <Login /> 
       <Regi />   */}
      <Home src={Avatar} alt="avatar" />
    </div>
  );
}

export default App;
