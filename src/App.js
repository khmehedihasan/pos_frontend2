import '../src/assets/css/style.css';
import './assets/css/custom.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import IsLogIn from './pages/IsLogIn';
import IsLogOut from './pages/IsLogOut';

import LogIn from './pages/Login';
import Home from './pages/Home';

import AddCategory from './pages/category/AddCategory';
import AllCategory from './pages/category/AllCategory';
import EditCategory from './pages/category/EditCategory';

import AddBrand from './pages/brand/AddBrand';
import AllBrand from './pages/brand/AllBrand';
import EditBrand from './pages/brand/EditBrand';

import AddUnit from './pages/unit/AddUnit';
import AllUnit from './pages/unit/AllUnit';
import EditUnit from './pages/unit/EditUnit';

import AddProduct from './pages/product/AddProduct';
import AllProduct from './pages/product/AllProduct';
import EditProduct from './pages/product/EditProduct';



function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Navigate to='/dashboard' />} />

      <Route path='/*' element={<IsLogOut />} >
        <Route path="logIn" element={ <LogIn />} />
      </Route>

      <Route path='/' element={<IsLogIn />} >
        <Route path='/' element={<Layout />} >
          <Route path='dashboard' element={<Home />} />

          <Route path='addCategory' element={<AddCategory />} />
          <Route path='allCategory' element={<AllCategory />} />
          <Route path='editCategory/:id' element={<EditCategory />} />

          <Route path='addBrand' element={<AddBrand />} />
          <Route path='allBrand' element={<AllBrand />} />
          <Route path='editBrand/:id' element={<EditBrand />} />

          <Route path='addUnit' element={<AddUnit />} />
          <Route path='allUnit' element={<AllUnit />} />
          <Route path='editUnit/:id' element={<EditUnit />} />

          <Route path='addProduct' element={<AddProduct />} />
          <Route path='allProduct' element={<AllProduct />} />
          <Route path='editProduct/:id' element={<EditProduct />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
