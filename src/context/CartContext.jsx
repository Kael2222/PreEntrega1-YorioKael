import { useState, createContext } from "react";


export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);


    const limpiarCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removerProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const agregarAlCarrito = (data, cantidad) => {
      
        if (isInCart(data.id)) {
            setCart(cart.map(disco => {
                if(disco.id === data.id) return {...disco, cantidad:disco.cantidad + cantidad  }
                else return disco
            }))
        }


        else{
            setCart([...cart, {...data,cantidad}])
        }
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{
            limpiarCart,
            isInCart,
            removerProduct,
            agregarAlCarrito

        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;