import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage } from "../pages/chatPage/ChatPage";
import { EditProfilePage } from "../pages/editProfilePage/EditProfilePage";
import HomePage from "../pages/homePage/HomePage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { SignUpPage } from "../pages/signUpPage/SignUpPage";
import { PrivateRoutes } from "./PrivateRoutes";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route element={<PrivateRoutes />}>
                    <Route index element={<HomePage />} />
                    <Route path="/chat/:id/:name" element={<ChatPage />} />
                    <Route path="/profile" element={<EditProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}