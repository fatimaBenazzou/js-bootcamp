import { useContext } from "react";
import UserContext from "../contexts/user";

export default function useUser() {
    const user = useContext(UserContext);
    if (user) {
        return user;
    } else throw new Error("Context for user is not availible");
}
