import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/sign-up" element={<SignUpPage />}></Route>
                    <Route path="/sign-in" element={<SignInPage />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                    <Route path="/:slug" element={<PostDetailPage />}></Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
