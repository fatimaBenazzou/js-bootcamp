import { useLocalStorage } from "@uidotdev/usehooks";
import UserContext from "../contexts/user";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);

    // const [user, setUser] = useState(() => {
    //     return JSON.parse(localStorage.getItem("user")) || null;
    // });

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
