import {getData} from "../mock/discos";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([])

    const {nombreCategoria} = useParams();

   useEffect(() => {
    
       getData(nombreCategoria)
       .then((res) =>{
        setData(res)
       });

   }, [nombreCategoria]);

      
    return(
        <>
        <p className="saludo">{greeting}</p>
        
        <ItemList data={data} />
        </>
        
    )
}

export default ItemListContainer ;

    