import { BrowserRouter } from "react-router";
import Routers from "./Routers";
import { UserProvider } from "./providers/UserProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <UserProvider>
                    <BrowserRouter>
                        <Routers />
                    </BrowserRouter>
                    <Toaster />
                </UserProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
