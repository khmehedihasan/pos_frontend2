import '../src/assets/css/style.css';
import './assets/css/custom.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddProduct from './pages/product/AddProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/' element={<Layout />} >
        <Route path='dashboard' element={<Home />} />
        <Route path='addProduct' element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
