import { Back, CameraContainer, CameraIcon, Header, Img, InputName, Name, NameAndTitle, NameContainer, Page, Pencil, PencilContainer, PencilImg, ProfileContainer, ProfileImg, Title, Warning } from "./StyledEProfilePage";
import Back_Arrow_Gray from "../../assets/img/Back_Arrow_Gray.png"
// import Akali from "../../assets/img/Akali.jpg"
import avaNet from "../../assets/img/avaNet.png"
import camera from "../../assets/img/camera.png"
import pencil_green from "../../assets/img/pencil_green.png"
import contact_gray from "../../assets/img/contact_gray.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function EditProfilePage() {
    const [editName, setEditName] = useState(false);

    const navigate = useNavigate();
    return (
        <Page>
            <Header>
                <Back src={Back_Arrow_Gray} alt="Botão para voltar" onClick={() => navigate(-1)} />
                <h1>Perfil</h1>
            </Header>
            <ProfileContainer>
                {/* <ProfileImg src={Akali} alt="" /> */}
                <ProfileImg src={avaNet} alt="" />
                <CameraContainer>
                    <CameraIcon src={camera} />
                </CameraContainer>
            </ProfileContainer>
            <NameContainer>
                <Img src={contact_gray} />
                {editName ?
                    <InputName placeholder="Novo nome" autoFocus="on"/>
                    :
                    <NameAndTitle>
                        <Title>Nome</Title>
                        <Name>André</Name>
                    </NameAndTitle>
                }
                <PencilContainer onClick={() => setEditName(!editName)}>
                    <PencilImg src={pencil_green} />
                </PencilContainer>
            </NameContainer>
            <Warning>Esse não é seu nome de usuário nem seu PIN.<br />Esse nome será visível para seus contatos do WhatsApp</Warning>
        </Page>
    )
}







// parei na parte de editar o nome e a foto. Pensando em como fazer apra confirar a edição de nome.