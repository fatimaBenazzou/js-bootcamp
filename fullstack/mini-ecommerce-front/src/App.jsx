import { BrowserRouter } from "react-router";
import Routers from "./Routers";
import { UserProvider } from "./providers/UserProvider";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
