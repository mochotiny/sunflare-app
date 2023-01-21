
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/loginComponent';
import SignUp from './components/auth/signupComponent';
import Dashboard from './components/dashboard/dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/signin" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
