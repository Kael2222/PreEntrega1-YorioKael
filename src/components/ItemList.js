import React from 'react'
import Item from './Item'


const ItemList = ( {data} ) => {
  
    data.map((data) => {
      return(
        <Item key={data.id} data= {data} />
        );
      });
    
  }


export default ItemList;