import { useEffect,useState } from "react";
import { discos } from "../mock/discos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const {idDisco} = useParams();

    
    const [dataDetail, setDataDetail] = useState({})

   useEffect(() => {
    const getDataDetail = () => {
        return new Promise((res) => {
            const detalle = discos.find((dataDetail) =>dataDetail.id === idDisco)
            setTimeout(() => {
                res(detalle);
            }, 2000)
       });
    }  ; 

    
       getDataDetail().then((res) =>{
        setDataDetail(res)
       });

   });

      
    return(
        <>
            <ItemDetail data={dataDetail} />
        </>
        
    )
}

export default ItemDetailContainer ;