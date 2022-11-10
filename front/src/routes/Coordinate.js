export const goToHomePage = (navigate) => {
    navigate("/");
}

export const goToChatPage = (navigate, id, name) => {
    navigate(`/chat/${id}/${name}`);
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup");
}

export const goToLoginPage = (navigate) => {
    navigate("/login");
}