import { Route, Routes } from 'react-router-dom'
import './App.css'
import AmazonHeader from './pages/Header'
import AmazonFooter from './pages/Footer'
import ProductHome from './components/Home/Pages/ProductHome'
import ShoppingCart from './components/cart/MyCart'
import ProductSingleView from './components/ProductDetails/Pages/ProductSingleView'
import MyOrdersPage from './components/Myorder/Orders'
import CheckoutPage from './components/CheckoutPage/Checkout'
import AmazonLogin from './components/Login/Login'

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<ProductHome/>}/>
  <Route path='/cart' element={<ShoppingCart/>}/>
  <Route path='/productdetails/:id' element={<ProductSingleView/>}/>
  <Route path='/orders' element={<MyOrdersPage/>}/>
  <Route path='/checkout' element={<CheckoutPage/>}/>
  <Route path='/login' element={<AmazonLogin/>}/>
</Routes>
    </>
  )
}

export default App
