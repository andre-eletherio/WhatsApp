import { Back, Container, Image, Name } from "./StyleHeaderChat";
// import Akali from "../../../assets/img/Akali.jpg"
import avaNet from "../../../assets/img/avaNet.png"
import BackArrow from "../../../assets/img/Back_Arrow.png"
import { useNavigate, useParams } from "react-router-dom";

export function HeaderChat() {

    const navigate = useNavigate();

    const pathParams = useParams();


    return (
        <Container>
            <Back src={BackArrow} onClick={()=> navigate(-1)}/>
            {/* <Image src={Akali}/> */}
            <Image src={avaNet}/>
            <Name>{pathParams.name}</Name>
        </Container>
    )
}