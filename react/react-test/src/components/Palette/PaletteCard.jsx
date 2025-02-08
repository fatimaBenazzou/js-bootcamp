import PropTypes from "prop-types";
import "./style.css";

function PaletteCard({ from, to }) {
    // const { name, age } = props;
    return (
        <div className="palette">
            <div
                className="palette-gradient"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            ></div>
            <p className="palette-caption">
                {from} - {to}
            </p>
        </div>
    );
}

PaletteCard.PropTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default PaletteCard;
