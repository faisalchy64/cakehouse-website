import Cake from "../Cake/Cake";
import "./Cakes.css";

function Cakes({ cakes }) {
    return (
        <div className="cakes">
            {cakes.map((cake) => (
                <Cake key={cake.id} cake={cake}></Cake>
            ))}
        </div>
    );
}

export default Cakes;
