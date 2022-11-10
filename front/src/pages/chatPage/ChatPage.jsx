import axios from "axios";
import { HeaderChat } from "../../components/chat/header/HeaderChat";
import { TextField } from "../../components/chat/textField/TextField";
import { Body, Container, MessageChat, MessageChatOther, MessageChatSelf, Messages } from "./StyleChat";
import {BASE_URL} from "../../constants/BASE_URL"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ChatPage() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
          getMessages();
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);

    const pathParams = useParams();

    const getMessages = () => {
        axios.get(
            BASE_URL + "/users/messages/" + pathParams.id, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        ).then((res)=> setMessages(res.data));
    }

    const messagesList = messages && messages?.map((mes, i)=> {
        return mes.receiver == pathParams.id ? <MessageChatSelf key={i}>{mes.message}</MessageChatSelf> : <MessageChatOther key={i}>{mes.message}</MessageChatOther>
    })

    // parei separando as mensagens em esquerda e direita com base no receiver

    useEffect(()=> {
        getMessages()
    }, [])
    
    return (
        <Container>
            <HeaderChat />
            <Body>
                <Messages>
                    {messagesList}
                </Messages>
                <TextField/>
            </Body>
        </Container>
    )
}