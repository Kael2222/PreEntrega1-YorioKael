import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './main/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';





const App = () => {
   return (
   <BrowserRouter>
      <Header />
      <Routes>
         <Route 
            path='/' 
            element={
               <ItemListContainer greeting= "Bienvenidxs a nuestra tienda online"/> 
            } 
         />
         <Route 
         path='/categoria/:nombreCategoria' 
         element= {<ItemListContainer/>} 
         />
         <Route path='/detail/:idDisco' element= { <ItemDetailContainer />} />
         <Route path='/CartWidget' element= {<CartWidget/>} />
      </Routes>
      <Footer />
   </BrowserRouter>
  );
}



export default App;
         
        