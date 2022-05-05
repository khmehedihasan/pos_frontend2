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

import AllSupplier from './pages/supplier/AllSupplier';
import AddSupplier from './pages/supplier/AddSupplier';
import EditSupplier from './pages/supplier/EditSupplier';

import AddCustomer from './pages/customer/AddCustomer';
import AllCustomer from './pages/customer/AllCustomer';
import EditCustomer from './pages/customer/EditCustomer';




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

          <Route path='allSupplier' element={<AllSupplier />} />
          <Route path='addSupplier' element={<AddSupplier />} />
          <Route path='editSupplier/:id' element={<EditSupplier />} />

          <Route path='allCustomer' element={<AllCustomer />} />
          <Route path='addCustomer' element={<AddCustomer />} />
          <Route path='editCustomer/:id' element={<EditCustomer />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
