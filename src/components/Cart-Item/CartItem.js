import "./CartItem.css";

function CartItem({ item, handleDelete }) {
    const { id, name, image } = item;
    return (
        <div className="cart-item">
            <div className="img-box">
                <img src={image} alt="" />
            </div>
            <h6>{name}</h6>
            <span
                onClick={() => handleDelete(id)}
                className="material-icons-outlined icon"
            >
                delete
            </span>
        </div>
    );
}

export default CartItem;
