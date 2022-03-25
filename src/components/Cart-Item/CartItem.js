import "./CartItem.css";

function CartItem({ item, handleDelete }) {
    const { name, image, price } = item;
    return (
        <div className="cart-item">
            <div className="img-box">
                <img src={image} alt="" />
            </div>
            <h6>{name}</h6>
            <span
                onClick={() => handleDelete(item.id)}
                className="material-icons-outlined"
            >
                delete
            </span>
        </div>
    );
}

export default CartItem;
