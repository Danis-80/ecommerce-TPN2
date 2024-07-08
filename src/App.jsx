import { Header } from './component/Header'
import { ProductList } from './component/ProductList'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Boton_NewUser from './component/Boton_NewUser';
import {NewUser} from './component/NewUser';
import {Formulario} from './component/Formulario';
import MiBotonLogin from './component/Boton_Login';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element= {<ProductList />}/>
        <Route path="./component/NewUser" component={Boton_NewUser} />
        <Route path="./component/Formulario" component={MiBotonLogin} />
        
      </Routes>

      

      
      </BrowserRouter>
      </div>    
  )
}

export default App
