import { useEffect, useState } from "react";
import useShop from "../hooks/useShop";
import { useDebounce } from "@uidotdev/usehooks";

export default function SearchBar() {
    const { setSearch } = useShop();
    const [currentSearch, setCurrentSearch] = useState("");
    const debouncedSearch = useDebounce(currentSearch, 300);

    useEffect(() => {
        setSearch(debouncedSearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);

    return (
        <form>
            <label>
                <input
                    type="search"
                    placeholder="Search for products"
                    value={currentSearch}
                    onChange={(e) => {
                        setCurrentSearch(e.target.value);
                    }}
                />
                <span>🔍</span>
            </label>
        </form>
    );
}
