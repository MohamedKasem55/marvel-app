import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes ,useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Charachters from './pages/Charachters';
import CharachterDetails from './pages/CharachterDetails';
import SearchItemContext from './context/searchItemContext';
import Cart from './pages/Cart';
import { useSelector } from "react-redux";
//4c643d75decc4e04bdc0e52edb33de8f
function App() {
  const [item, setItem] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  /* let navigate=useNavigate() */
  let state=useSelector(state=>state)
  const itemSetterHandler = (data) => {
    setItem(data)
  }
  const isLoadingHnadler = (flag) => {
  setIsLoading(flag)
  }
  useEffect(() => {
    /* (state.auth.isLoggedin===false)&&navigate('/') */
  }, [])
  
  return (
    <Router>
      <SearchItemContext.Provider
        value={{
          item: item,
          itemSetter: itemSetterHandler,
          isLoading:isLoading,
          onLoading:isLoadingHnadler
        }}>
        {state.auth.isLoggedin&&<Navbar />}
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/charachters"} element={<Charachters />} />
            <Route path={"/:id"} element={<CharachterDetails />} />
          </Routes>
      </SearchItemContext.Provider>
    </Router>
  );
}

export default App;
