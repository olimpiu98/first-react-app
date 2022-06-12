import './App.css';
// Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './pages/Footer';




function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Home' element={<Home />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
