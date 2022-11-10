import { Container, Image, Name, Notification } from "./StyleCard";
// import Akali from "../../../assets/img/Akali.jpg"
import avaNet from "../../../assets/img/avaNet.png"
import { useNavigate } from "react-router-dom";
import { goToChatPage } from "../../../routes/Coordinate"

export function Card({ contact }) {

    const navigate = useNavigate();

    return (
        <Container onClick={() => goToChatPage(navigate, contact.user_id, contact.name)}>
            {/* <Image src={Akali} /> */}
            <Image src={avaNet} />
            <Name>
                <p>{contact?.name}</p>
                {contact.receiver > contact.user_id && contact.new_messages_rigth ? <Notification /> : <h1></h1>}
                {contact.receiver < contact.user_id && contact.new_messages_left ? <Notification /> : <h1></h1>}
            </Name>
        </Container>
    )
}