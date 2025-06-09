import { useContext } from "react";
import { CartContext } from "../contextCart/cartContextApi";
import "./pagesCss/Cart.css";
import { useNavigate } from "react-router";


const Cart = () => {
  const { cart, increaseQuantity,setCart, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  const totalPrice = cart && cart.reduce((acc, item) => {
    return acc + item.one_time_price * item.quantity;
  }, 0);


  const handleBuy =() =>{
    setCart([])
    alert("order successfully placed")
    navigate("/")
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/flower-mall-color-icon/shopping-cart-114.png"
            alt="Empty cart"
            className="empty-cart-image"
          />
          <p>Your cart is empty</p>
        </div>
      ) : (
        cart.map((item) => (
          <>
            <div className="cart-item" key={item._id}>
              <img src={item.images[0]} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.brand_name}</h3>
                <p>Price: $ {item.one_time_price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="button-group">
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>

            <div className="cart-total">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
            <div className="buy-total">
                <button onClick={handleBuy}>Buy</button>
            </div>
          </>
          
        ))
      )
      
      
      }
      
    </div>
  );
};

export default Cart;
