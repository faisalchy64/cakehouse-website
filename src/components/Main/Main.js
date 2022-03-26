import { useEffect, useState } from "react";
import Cakes from "../Cakes/Cakes";
import Cart from "../Cart/Cart";
import Popup from "../Popup/Popup";
import "./Main.css";

function Main() {
    const [cakes, setCakes] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState("");
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCakes(data));
    }, []);

    const addToCart = (id) => {
        const item = cakes.find((cake) => cake.id === id);

        if (cart.find((duplicate) => duplicate.id === id)) {
            return;
        }

        if (cart.length === 4) {
            setPopup(true);
            return;
        }

        setCart([...cart, item]);
    };

    const handleDelete = (id) => {
        const items = cart.filter((item) => item.id !== id);
        setCart(items);
    };

    const handleRandom = () => {
        const number = Math.abs(Math.round(Math.random() * cart.length - 1));
        const randomItem = cart[number];

        setRandom(randomItem);
    };

    const handleClear = () => {
        setCart([]);
        setRandom("");
    };

    const handleClose = () => {
        setPopup(false);
    };

    return (
        <main>
            <Cakes cakes={cakes} addToCart={addToCart}></Cakes>
            {popup ? <Popup handleClose={handleClose}></Popup> : ""}
            <Cart
                cart={cart}
                random={random}
                handleDelete={handleDelete}
                handleClear={handleClear}
                handleRandom={handleRandom}
            ></Cart>
        </main>
    );
}

export default Main;
