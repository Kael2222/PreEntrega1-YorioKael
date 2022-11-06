import { useState, createContext } from "react";


export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);


    const limpiarCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removerProduct = (id) = setCart(cart.filter(product => product.id !== id));

    const agregarAlCarrito = 

    

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