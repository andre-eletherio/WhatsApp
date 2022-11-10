import { Container, Item, List } from "./StyleNav";

export function Nav({selected, selectPage}) {

    const selectedLeft = selected ? {color: "#00a884", borderBottom: "1px solid #00a884"} : {border: "none"};
    const selectedRight = !selected ? {color: "#00a884", borderBottom: "1px solid #00a884"} : {border: "none"};

    return(
        <Container>
            <List>
                <Item style={selectedLeft} onClick={()=> selectPage(true)}>Conversas</Item>
                <Item style={selectedRight} onClick={()=> selectPage(false)}>Contatos</Item>
            </List>
        </Container>
    )
}