import { useContext } from "react";
import { CartContext } from "../contextCart/cartContextApi";



const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div>
        <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : 
                cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                ))
            }
            </div>
    );
    
    
}

export default Cart ;