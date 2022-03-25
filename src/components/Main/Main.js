import { useEffect, useState } from "react";
import Cakes from "../Cakes/Cakes";
import "./Main.css";

function Main() {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCakes(data));
    }, []);

    return (
        <main>
            <Cakes cakes={cakes}></Cakes>
        </main>
    );
}

export default Main;
