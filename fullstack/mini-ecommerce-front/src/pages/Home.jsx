import { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case "Inc":
            return state + 1;
        case "Dec":
            return state - 1;
        case "Reset":
            return 0;
        case "Set":
            return 10;
        default:
            return state;
    }
}
function Home() {
    const [count, dispatch] = useReducer(counterReducer, 0);
    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick={() => dispatch({ type: "Inc" })}>+</button>
            <button onClick={() => dispatch({ type: "Dec" })}>-</button>
            <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "Set" })}>set to 10</button>
        </div>
    );
}

export default Home;
