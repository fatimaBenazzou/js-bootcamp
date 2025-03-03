const sortingMap = {
    name: "Name",
    "price.current": "Price",
    createdAt: "Newest",
};

export default function SearchBar() {
    return (
        <form>
            <div>
                <label>
                    <input type="search" placeholder="Search for products" />
                    <span>🔍</span>
                </label>
                <div>
                    <select name="sorting">
                        {Object.entries(sortingMap).map(([value, display]) => (
                            <option key={value} value={value}>
                                {display}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => {}}></button>
                </div>
            </div>
        </form>
    );
}
