// eslint-disable-next-line react/prop-types
function ProgressBar({ progress = 0 }) {
    const validWidth = Math.min(100, Math.max(0, progress));
    const progressClass = validWidth < 30 ? "low" : validWidth < 70 ? "medium" : "high";
    return (
        <div className="container">
            <div className={`innerContainer ${progressClass}`} style={{ width: `${validWidth}%` }}>
                {validWidth}%
            </div>
        </div>
    );
}

export default ProgressBar;
