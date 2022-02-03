import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthProvider from './context/context';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import AddProducts from './pages/admin/addproducts/addproducts.js'
import Signin from './pages/signin/signin.js';
import ProductList from './pages/admin/productlist/productlist.js';
import EditProduct from './pages/admin/editProduct/editProduct.js'
import Details from './pages/admin/details/details';
import Cart from './pages/cart/cart'



import PageNotFound from './pages/pagenotfound/pagenotfound'
import ProductDescription from './pages/productDescription/productDescription';






function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="signup" element={<Signup />} />

          <Route path="signin" element={<Signin />} />

          <Route path="addproducts" element={<AddProducts />} />

          <Route path='productlist' element={<ProductList />} />

          <Route path='/productlist/:productId' element={<EditProduct />} />

          <Route path='/details/:productId' element={<Details />} />

          <Route path='/productDescription/:productId' element={<ProductDescription />} />

          <Route path='/cart' element={<Cart />} />






          <Route path='*' element={<PageNotFound />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
