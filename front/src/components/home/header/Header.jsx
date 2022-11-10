import { Container, Lupa } from "./HeaderStyle";
import contact_gray from "../../../assets/img/contact_gray.png"
import { useNavigate } from "react-router-dom";

export function Header() {

    const navigate = useNavigate();

    return (
        <Container>
            <h1>WhatsApp</h1>
            <Lupa src={contact_gray} onClick={()=> navigate("/profile")} />
        </Container>
    )
}