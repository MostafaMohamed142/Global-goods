import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import End from './components/End';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/product/:id' element={<ProductPage/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<SignUp/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
                  <Route path='/end' element={<End/>}/>
            </Routes>
      </BrowserRouter>
        <footer>
        <Footer/>
      </footer>
        
    </div>
  );
}

export default App;
