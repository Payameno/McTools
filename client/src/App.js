import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import Inspection from './components/Inspection';
import Handtools from './components/Handtools';
import Machinery from './components/Machinery';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';
import './style/App.css';

function App() {
  const [machinery, setMachinery] = useState({});
  const [inspection, SetInspection] = useState({});
  const [handtools, setHandtools] = useState({});
  const [products, setProducts] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  const endpoints = [
    '/api/machinery',
    '/api/inspection',
    '/api/handtools',
    '/api/all-products'
  ];

  useEffect(() => {
    Promise.all(endpoints.map((api) => axios.get(api)))
      .then(([{ data: machinery }, { data: inspection }, { data: handtools }, { data: products }]) => {
        setMachinery({ ...machinery })
        SetInspection({ ...inspection })
        setHandtools({ ...handtools })
        setProducts({ ...products })
      })
  }, [])

  return (
    <div>
      <header>
        <div className="logo"><Link to={'/'} className='logo-link'>M C T O O L S</Link></div>
        <nav>
          <ul className="nav_links" >
            <li><Link to={'/machinery'}>Machinery</Link></li>
            <li><Link to={'/inspection'}>Inspection</Link></li>
            <li><Link to={'/handtools'}>Handtools</Link></li>
          </ul>
        </nav>
        <Link to='/login' className='login-button'>Log in</Link>
      </header>

      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/machinery' element={<Machinery machinery={machinery} />} />
        <Route path='/inspection' element={<Inspection inspection={inspection} />} />
        <Route path='/handtools' element={<Handtools handtools={handtools} />} />
        <Route path='/login' element={<Login setLoginStatus={setLoginStatus} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<ProductDetail products={products} />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;