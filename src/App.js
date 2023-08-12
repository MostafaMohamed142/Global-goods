import './App.css';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
            
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/product/:id' element={<ProductPage/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
