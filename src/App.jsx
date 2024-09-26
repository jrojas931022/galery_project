
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Imagen_1 } from './components/Imagen_1';
import { Imagen_2 } from './components/imagen_2';
import { Imagen_3 } from './components/imagen_3';
import { Imagen_4 } from './components/imagen_4';
import { Imagen_5 } from './components/imagen_5';
import { Imagen_6 } from './components/imagen_6';
import { Navigation } from './components/navigation';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <div>
        <h1 className='text-center my-3'>Galery Project</h1>
      </div>
      <div className='container d-flex justify-content-center'>
      <Routes>
        <Route path='/imagen_1'element={<Imagen_1 className=".main-img-container" />}/>
          <Route path='/imagen_2'element={<Imagen_2 className=".main-img-container" />}/>
          <Route path='/imagen_3'element={<Imagen_3 className=".main-img-container" />}/>
          <Route path='/imagen_4'element={<Imagen_4 className=".main-img-container" />}/>
          <Route path='/imagen_5'element={<Imagen_5 className=".main-img-container" />}/>
          <Route path='/imagen_6'element={<Imagen_6 className=".main-img-container" />}/>
        </Routes>    
      </div>
      <div className="container">
      <Navigation />
        
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
