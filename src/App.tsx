import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          {/* <SignUp/> */}
            <Routes>
                <Route path='/' element={<Main/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/product/:id' element={<ProductPage/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<SignUp/>}/>

                  
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
