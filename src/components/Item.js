import React from 'react'


const Item = ( {data} ) => {
  return (
    <div >
    < a href='.' className='discos'>
        <img src={data.img}
         alt={data.title}/>
    <article>
      <h2>{data.title}</h2>
      <h3>{data.precio}</h3>
    </article>
    </a>
    </div>
  )
}


export default Item;