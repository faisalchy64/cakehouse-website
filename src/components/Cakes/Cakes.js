import Cake from "../Cake/Cake";
import "./Cakes.css";

function Cakes({ cakes, addToCart }) {
    return (
        <div className="cakes">
            {cakes.map((cake) => (
                <Cake key={cake.id} cake={cake} addToCart={addToCart}></Cake>
            ))}
        </div>
    );
}

export default Cakes;
