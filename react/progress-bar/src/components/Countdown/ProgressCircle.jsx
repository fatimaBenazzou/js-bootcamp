import PropTypes from "prop-types";

ProgressCircle.propTypes = {
    value: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
function ProgressCircle({ value, percentage }) {
    return (
        <div className="relative h-24 w-24 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-transparent border-gray-200"></div>
            <div
                className="absolute w-full h-full rounded-full  transition-all duration-500 bg-amber-700"
                style={{
                    background: `conic-gradient(currentColor ${percentage}%, #e0e0e0 ${percentage}%)`,
                    maskImage: "radial-gradient(circle, transparent 55%, black 56%)",
                }}
            ></div>
            <span className="text-lg font-bold text-gray-800">{value}</span>
        </div>
    );
}
export default ProgressCircle;
