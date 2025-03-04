import useShop from "../hooks/useShop";

const sortingMap = {
    name: "Name",
    "price.current": "Price",
    createdAt: "Newest",
};
export default function Sorting() {
    const { sorting, setSorting } = useShop();
    return (
        <div>
            <select
                name="sorting"
                value={sorting.path}
                onChange={(e) => {
                    setSorting((p) => ({ ...p, path: e.target.value }));
                }}
            >
                {Object.entries(sortingMap).map(([value, display]) => (
                    <option key={value} value={value}>
                        {display}
                    </option>
                ))}
            </select>
            <button
                onClick={() => {
                    setSorting((d) => ({ ...d, dir: d.dir === "asc" ? "desc" : "asc" }));
                }}
            >
                {sorting.dir === "asc" ? "⬆ Asc" : "⬇ Desc"}
            </button>
        </div>
    );
}
