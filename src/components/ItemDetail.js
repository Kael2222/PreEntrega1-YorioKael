import React, { useState } from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    
    const onAdd = (cantidad) => {
        setIrAlCarrito(true); 
    }
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail__image' src={data.img} alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
                <h3>${data.precio}</h3>
                <ItemCount initial={0} stock={data.stock} onAdd={onAdd}  />
            </div>
        </div>

    </div>
  );
}

export default ItemDetail;