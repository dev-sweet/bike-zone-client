import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import BikeDetails from './pages/BikeDetails/BikeDetails';
import { Bikes } from './pages/Bikes/Bikes';
import Cart from './pages/Cart/Cart/Cart';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bikes" element={<Bikes />} />
          <Route exact path="/bikes/:id" element={<BikeDetails />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
