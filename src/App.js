import { Routes, Route } from 'react-router-dom';
import Header from './Partials/Header/Header';
import Nav from './Components/Nav/Nav';
import HomePage from './Pages/HomePage/HomePage';
import SuppliersPage from './Pages/SuppliersPage/SuppliersPage';
import VegetablesPage from './Pages/VegetablesPage/VegetablesPage';
import LeftoversPage from './Pages/LeftoversPage/LeftoversPage';
import SupplierPage from './Pages/SupplierPage/SupplierPage';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/suppliers' element={<SuppliersPage />} />
        <Route path='/suppliers/:id' element={<SupplierPage />} />
        <Route path='/vegetables' element={<VegetablesPage />} />
        <Route path='/leftovers' element={<LeftoversPage />} />
      </Routes>
    </>
  );
}

export default App;
