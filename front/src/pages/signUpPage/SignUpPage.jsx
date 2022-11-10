import axios from "axios";
import { Button, Form, Input, Link, Login, LoginStyle, Logo, NewAccount } from "./styleSignUp";
import logo from "../../assets/img/logo.png"
import wallpaper from "../../assets/img/wallpaper.png"
import {BASE_URL} from "../../constants/BASE_URL"
import { useForm } from "../../hooks/useForm";
import { goToHomePage, goToLoginPage } from "../../routes/Coordinate";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {

    const navigate = useNavigate();

    const { form, onChange, clear } = useForm({name: "", email: "", password: "", passwordConfirmation: ""});

    const onSubmitForm = (e) => {
        e.preventDefault();
        axios.post(
            BASE_URL + "/users/signup", form
        ).then((res)=> {
            localStorage.setItem("token", res.data.token);
            goToHomePage(navigate);
        }).catch((err)=> alert(err.message));
    }

    return (
        <LoginStyle style={{ backgroundImage: `url(${wallpaper})` }}>
            <Logo src={logo} alt="" />
            <Login>Cadastre-se</Login>
            <Form onSubmit={onSubmitForm}>
                <Input required onChange={onChange} placeholder="Nome" type="text" name="name" autoComplete="off"/>
                <Input required onChange={onChange} placeholder="E-mail" type="email" name="email" autoComplete="off"/>
                <Input required onChange={onChange} placeholder="Senha" type="password" name="password"/>
                <Input required onChange={onChange} placeholder="Confirmação" type="password" name="passwordConfirmation"/>
                <Button>Cadastrar</Button>
            </Form>
            <NewAccount>Já possui conta? <Link onClick={()=> goToLoginPage(navigate)}><u>Fazer login</u></Link></NewAccount>
        </LoginStyle>
    )
}