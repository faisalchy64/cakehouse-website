import "./Cake.css";

function Cake({ cake }) {
    const { name, image, price } = cake;
    return (
        <div className="cake">
            <img src={image} alt="" />
            <div>
                <h1>{name}</h1>
                <h3>${price}</h3>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}

export default Cake;
