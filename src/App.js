import Header from "./client/Header";
import Home from "./client/Home";
import Footer from "./client/Footer";
import Register from "./client/Register";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>

        <Footer />
      </Router>    
  );
} 

export default App;
