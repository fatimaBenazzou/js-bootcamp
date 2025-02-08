import "./App.css";
import Counter from "./components/Counter";
import PaletteCard from "./components/Palette/PaletteCard";
import ToggleButton from "./components/ToggleButton";
// import Img from "/IMG_7982";
function App() {
    const palettes = [
        {
            from: "#f40076",
            to: "#df98fa",
        },
        {
            from: "#f06966",
            to: "#fad6a6",
        },
        {
            from: "#ff0076",
            to: "#590fb7",
        },
        {
            from: "#9055ff",
            to: "#13e2da",
        },
        {
            from: "#0b63f6",
            to: "#003cc5",
        },
        {
            from: "#d6ff7f",
            to: "#00b3cc",
        },
        {
            from: "#e233ff",
            to: "#ff6b00",
        },
        {
            from: "#df98fa",
            to: "#9055ff",
        },
        {
            from: "#ed7b84",
            to: "#9055ff",
        },
        {
            from: "#402565",
            to: "#30be96",
        },
        {
            from: "#402662",
            to: "#3900a6",
        },
        {
            from: "#f14658",
            to: "#dc2537",
        },
        {
            from: "#f40076",
            to: "#342711",
        },
        {
            from: "#000066",
            to: "#6699ff",
        },
        {
            from: "#cb5eee",
            to: "#4be1ec",
        },
        {
            from: "#fa7cbb",
            to: "#f14658",
        },
        {
            from: "#737dfe",
            to: "#ffcac9",
        },
        {
            from: "#2f80ed",
            to: "#b2ffda",
        },
    ];
    return (
        <div className="">
            <ToggleButton />
            <Counter />
            <h1>Palettes de couleurs</h1>
            <div className="palettes-grid">
                {palettes.map((palette, i) => (
                    <PaletteCard key={"palette" + i} from={palette.from} to={palette.to} />
                ))}
            </div>
        </div>
    );
}

export default App;
