import { Button, Form, Img, Input } from "./StyleTextField";
import send from "../../../assets/img/send.png"
import axios from "axios";
import { BASE_URL } from "../../../constants/BASE_URL";
import { useForm } from "../../../hooks/useForm";
import { useParams } from "react-router-dom";

export function TextField() {

    const pathParams = useParams();

    const {form, onChange, clear} = useForm({message: ""});

    const onSubmitForm = (e) => {
        e.preventDefault();
        axios.post(
            BASE_URL + "/users/sendMessage/" + pathParams.id, form, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        ).then(()=> clear())
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Input requided onChange={onChange} value={form.message} placeholder="Mensagem" name="message" autoComplete="off"/>
            <Button><Img src={send}/></Button>
        </Form>
    )
}