import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './components/Login';
//import Register from './components/Register';
import Home from './pages/Home';

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const isAuthenticated = () => {
//     const token = localStorage.getItem('token'); 
//     return !!token; 
//   };

//   return isAuthenticated() ? children : <Navigate to="/" />;
// };

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Router>
        <Routes>
          {/*<Route path="/" element={<Login />} />*/}
          {/*<Route path="/register" element={<Register />} />*/}
          {/*<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> TIVE QUE REMOVER POIS N GERA TOKEN SEM LOGIN*/}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;