import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades al carrito`)
    }
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail__image' src={data.img} alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
                <h3>{data.precio}</h3>
                <ItemCount initial={0} stock={10} onAdd={onAdd}  />
            </div>
        </div>

    </div>
  );
}

export default ItemDetail;