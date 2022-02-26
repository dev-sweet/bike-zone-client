import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BikeDetails from './pages/BikeDetails/BikeDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bikes/:id" element={<BikeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
