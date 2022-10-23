import ItemCount from "./ItemCount";
import { discos } from "../mock/discos";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades al carrito`)
    }

    const [data, setData] = useState([])

   useEffect(() => {
    const getData = () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(discos);
            }, 2000)
       });
    }  ; 

    
       getData().then((res) =>{
        setData(res)
       });

   }, []);

      
    return(
        <>
        <p className="saludo">{greeting}</p>
        <ItemCount initial={0} stock={10} onAdd={onAdd}  />
        <ItemList data={data} />
        </>
        
    )
}

export default ItemListContainer ;