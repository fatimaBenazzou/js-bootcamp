import { BrowserRouter } from "react-router";
import Routers from "./Routers";
import { UserProvider } from "./providers/UserProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
