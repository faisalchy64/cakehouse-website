import "./Cake.css";

function Cake({ cake }) {
    const { id, name, image, price } = cake;
    return (
        <div className="cake">
            <img src={image} alt="" />
            <div className="content">
                <h2>{name}</h2>
                <h2>${price}</h2>
                <button onClick={() => addToCart(id)}>
                    Add To Cart
                    <span class="material-icons-outlined">
                        add_shopping_cart
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Cake;
