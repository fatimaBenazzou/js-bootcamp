import { useState } from "react";
import PaletteCard from "./Palette/PaletteCard";

function Counter() {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);
    return (
        <div>
            <PaletteCard />
            <p style={{ color: "black" }}>Counter: {counter} </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Counter;
