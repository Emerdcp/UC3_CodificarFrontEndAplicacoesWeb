import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre/Sobre';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='Sobre' element={<Sobre/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App