import { useState } from "react";
import ShopContext from "../contexts/shop";

// eslint-disable-next-line react/prop-types
export default function ShopProvider({ children }) {
    const [sorting, setSorting] = useState({
        path: "createdAt",
        dir: "asc",
    });
    const [search, setSearch] = useState("");
    return (
        <ShopContext.Provider value={{ search, setSearch, sorting, setSorting }}>
            {children}
        </ShopContext.Provider>
    );
}
