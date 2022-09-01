import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Charachters from './pages/Charachters';
import CharachterDetails from './pages/CharachterDetails';
import SearchItemContext from './context/searchItemContext';

//4c643d75decc4e04bdc0e52edb33de8f
function App() {
  const [item, setItem] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const itemSetterHandler = (data) => {
    setItem(data)
  }
  const isLoadingHnadler = (flag) => {
  setIsLoading(flag)
  }
  return (
    <Router>
      <SearchItemContext.Provider
        value={{
          item: item,
          itemSetter: itemSetterHandler,
          isLoading:isLoading,
          onLoading:isLoadingHnadler
        }}>
        <Navbar />

          <Routes>
{/*             <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} /> */}
            <Route path={"/"} element={<Charachters />} />
            <Route path={"/:id"} element={<CharachterDetails />} />
          </Routes>
      </SearchItemContext.Provider>
    </Router>
  );
}

export default App;
