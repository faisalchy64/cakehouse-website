import CartItem from "../Cart-Item/CartItem";
import "./Cart.css";

function Cart({ cart, random, handleDelete, handleClear, handleRandom }) {
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

            <h3>Randomly Choose Item Here</h3>

            {random ? (
                <div>
                    <h3>Perfect Match For You</h3>
                    <CartItem
                        item={random}
                        handleDelete={handleDelete}
                    ></CartItem>
                </div>
            ) : (
                ""
            )}

            <button onClick={handleRandom} id="choose">
                CHOOSE ONE FOR ME
            </button>
            <button onClick={handleClear} id="clear">
                CLEAR ALL
            </button>
        </div>
    );
}

export default Cart;
