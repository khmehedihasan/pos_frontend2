import '../src/assets/css/style.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/' element={<Layout />} >
        <Route path='dashboard' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
