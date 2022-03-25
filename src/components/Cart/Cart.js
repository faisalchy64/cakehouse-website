import CartItem from "../Cart-Item/CartItem";
import "./Cart.css";

function Cart({ cart, handleDelete }) {
    return (
        <div className="cart">
            <h1>Cart</h1>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                ></CartItem>
            ))}
        </div>
    );
}

export default Cart;
