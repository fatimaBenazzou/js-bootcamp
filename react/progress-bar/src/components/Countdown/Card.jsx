import PropTypes from "prop-types";
import ProgressCircle from "./ProgressCircle";

function Card({ counter }) {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <ProgressCircle value={counter.value} percentage={counter.percentage * 100} />
            <span className="text-sm text-gray-600 uppercase mt-2">{counter.label}</span>
        </div>
    );
}

Card.propTypes = {
    counter: PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};
export default Card;
