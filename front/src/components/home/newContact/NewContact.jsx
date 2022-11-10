import { Container, Image, Name, NCInput, NCInputContainer, NCSend, NewContactContainer } from "./StyleNewContact";
import new_contact from "../../../assets/img/new_contact.png";
import { useState } from "react";
import send from "../../../assets/img/send.png"
import axios from "axios";
import { BASE_URL } from "../../../constants/BASE_URL";

export function NewContact({updateContacts, setUpdateContacts}) {
    const [nCInput, setNCInput] = useState(false);
    const [email, setEmail] = useState("");

    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const submitEmail = () => {
        axios.post(
            BASE_URL + "/users/friends", {user2Email: email}, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        ).then(()=> setUpdateContacts(!updateContacts))
    }

    const ok = () => {
        setUpdateContacts(!updateContacts);
    }

    return (
        <Container>
            <NewContactContainer onClick={() => setNCInput(!nCInput)}>
                <Image src={new_contact} />
                <Name style={nCInput ? { borderBottom: "none" } : {}}>
                    <p>Novo Contato</p>
                </Name>
            </NewContactContainer>
            {
                nCInput &&
                <NCInputContainer>
                    <NCInput placeholder="E-mail" autoFocus="on" type="emaila=" onChange={getEmail} />
                    <NCSend src={send} onClick={submitEmail} />
                </NCInputContainer>
            }
        </Container>
    )
}