
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query,where } from "firebase/firestore";
import { baseDeDatos } from "../services/firebaseConfig";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([])
    const [cargando, setCargando] = useState(true);

    const {nombreCategoria} = useParams();

   useEffect(() => {

    const coleccionDiscos = collection(baseDeDatos, "discos")
    const q = query(coleccionDiscos, where("categoria", "==", nombreCategoria))

    getDocs(coleccionDiscos)
        .then((res) => {
            const disks = res.docs.map((disk) => {
                return {
                    id: disk.id,
                    ...disk.data()
                };
            });
            setData(disks);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setCargando(false);
        });
    
      // getData(nombreCategoria)
       //.then((res) =>{
       // setData(res)
       //});

   }, [nombreCategoria]);

      
    return(
        <>
        <p className="saludo">{greeting}</p>
        
        <ItemList data={data} /> 
        </>
        
    )
}

export default ItemListContainer ;

    

    