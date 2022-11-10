import axios from "axios";
import { Button, Form, Input, Link, Login, LoginStyle, Logo, NewAccount } from "./styleLogin";
import logo from "../../assets/img/logo.png"
import wallpaper from "../../assets/img/wallpaper.png"
import {BASE_URL} from "../../constants/BASE_URL"
import { useForm } from "../../hooks/useForm";
import { goToHomePage, goToSignUpPage } from "../../routes/Coordinate";
import { useNavigate } from "react-router-dom";

export function LoginPage() {

    const navigate = useNavigate();

    const { form, onChange, clear } = useForm({email: "", password: ""});

    const onSubmitForm = (e) => {
        e.preventDefault();
        axios.post(
            BASE_URL + "/users/login", form
        ).then((res)=> {
            localStorage.setItem("token", res.data.token);
            goToHomePage(navigate);
        }).catch((err)=> alert(err.message));
    }

    return (
        <LoginStyle style={{ backgroundImage: `url(${wallpaper})` }}>
            <Logo src={logo} alt="" />
            <Login>Fazer Login</Login>
            <Form onSubmit={onSubmitForm}>
                <Input required onChange={onChange} placeholder="E-mail" type="email" name="email" autoComplete="off"/>
                <Input required onChange={onChange} placeholder="Senha" type="password" name="password"/>
                <Button>Entrar</Button>
            </Form>
            <NewAccount>Não possui conta? <Link onClick={()=> goToSignUpPage(navigate)}><u>Cadastre-se</u></Link></NewAccount>
        </LoginStyle>
    )
}