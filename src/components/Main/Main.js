import { useEffect, useState } from "react";
import Cakes from "../Cakes/Cakes";
import Cart from "../Cart/Cart";
import "./Main.css";

function Main() {
    const [cakes, setCakes] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCakes(data));
    }, []);

    const addToCart = (id) => {
        const item = cakes.find((cake) => cake.id == id);
        setCart([...cart, item]);
        // console.log(cart);
    };

    const handleDelete = (id) => {
        console.log(id);
    };

    return (
        <main>
            <Cakes cakes={cakes} addToCart={addToCart}></Cakes>
            <Cart cart={cart} handleDelete={handleDelete}></Cart>
        </main>
    );
}

export default Main;
