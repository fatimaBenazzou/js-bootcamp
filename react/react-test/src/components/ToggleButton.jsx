import { useState } from "react";

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div style={{ color: "black" }}>
            <button onClick={toggle}>{isOn ? "Turn Off" : "Turn On"}</button>
            <p>Switch is {isOn ? "on" : "off"}.</p>
        </div>
    );
}
