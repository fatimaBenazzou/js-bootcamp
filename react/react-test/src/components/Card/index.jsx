import React from "react";
import "./style.css";
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, age, color = "red" } = this.props;

        return (
            <div style={{ backgroundColor: { color }, color: "black" }}>
                <h2>{name}</h2>
                <p>age : {age}</p>
            </div>
        );
    }
}

// const styles = {
//     card: {
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "16px",
//         margin: "10px",
//         width: "200px",
//         textAlign: "center",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
// };

export default Card;
