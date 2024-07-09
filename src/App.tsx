import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditTask from './pages/EditTask';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default App;
