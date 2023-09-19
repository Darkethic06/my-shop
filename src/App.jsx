import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Layout from './components/Layout' 
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
          <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

