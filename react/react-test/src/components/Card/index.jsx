import React from "react";
import "./style.css";
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, age } = this.props;

        return (
            <div className="card">
                <h2>{name}</h2>
                <p>age : {age}</p>
            </div>
        );
    }
}

export default Card;
