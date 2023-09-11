import logo from './logo.svg';
import './App.css';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import Main from './Building/Main';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Navigate to="/buildings" replace/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/buildings" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
