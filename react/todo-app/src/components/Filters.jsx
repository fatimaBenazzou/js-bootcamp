/* eslint-disable react/prop-types */
function Filters({ itemsLeft, filter, setFilter, clearCompleted }) {
    const buttons = ["all", "active", "completed"];
    return (
        <section className="text-center text-gray-400 mt-8">
            <div className="card flex bg-base-100 shadow-lg p-4 rounded-lg">
                <p>{itemsLeft} Items left</p>
                <div role="tablist" className="tabs filter flex justify-center gap-2">
                    {buttons.map((button, i) => (
                        <button
                            key={"button" + i}
                            role="tab"
                            className={`tab capitalize font-medium hover:font-extrabold ${
                                filter === button ? "text-blue-400 tab-active font-extrabold" : ""
                            }`}
                            onClick={() => setFilter(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <button onClick={clearCompleted} className="btn btn-ghost">
                    Clear Completed
                </button>
            </div>
        </section>
    );
}

export default Filters;
