import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PostDetailPage from "./pages/PostDetailPage";
import DashboardPage from "./pages/DashboardPage";
import DashBoardLayout from "./components/module/dashboard/DashBoardLayout";
import PostManage from "./components/module/post/PostManage";
import PostAddNew from "./components/module/post/PostAddNew";

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
                    <Route element={<DashBoardLayout />}>
                        <Route
                            path="/dashboard"
                            element={<DashboardPage />}
                        ></Route>
                        <Route
                            path="/manage/post"
                            element={<PostManage />}
                        ></Route>
                        <Route
                            path="/manage/add-post"
                            element={<PostAddNew />}
                        ></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
