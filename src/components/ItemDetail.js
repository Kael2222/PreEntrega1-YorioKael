import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false);

    const {agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setIrAlCarrito(true)
        agregarAlCarrito(data, cantidad)
    }


  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail__image' src={data.img} alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>{data.precio}</h3>
                <ItemCount initial={0} stock={data.stock} onAdd={onAdd}  />
            </div>
        </div>

    </div>
  );
}

export default ItemDetail;