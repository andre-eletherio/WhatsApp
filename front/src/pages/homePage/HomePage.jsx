import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/home/card/Card";
import { Header } from "../../components/home/header/Header";
import { Nav } from "../../components/home/nav/Nav";
import { Image, List, Page, Name, NCInputContainer, NCInput, NCSend } from "./styleHome";
import { BASE_URL } from "../../constants/BASE_URL"
import axios from "axios";
import {NewContact} from "../../components/home/newContact/NewContact"
// import { FloatingButton } from "../../components/home/floatingButton/FloatingButton";

function HomePage() {
    const [selected, setSelected] = useState(true);
    const [friends, setFriends] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [updateContacts, setUpdateContacts] = useState(false);

    const selectPage = (page) => {
        page ? setSelected(true) : setSelected(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getFriends();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        getContacts()
        getFriends()
    }, []);

    useEffect(()=> {
        getContacts()
    }, [updateContacts])

    const getFriends = () => {
        axios.get(
            BASE_URL + "/users/friends", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        ).then((res) => {
            setFriends(res.data)
        })
    }

    const getContacts = () => {
        axios.get(
            BASE_URL + "/users/contacts", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        ).then((res) => setContacts(res.data));
    }

    const friendList = friends?.length > 0 && friends.map((fri, i) => <Card key={i} contact={fri}></Card>);

    const contactList = contacts?.length > 0 && contacts?.map((cont, i) => <Card key={i} contact={cont}></Card>);

    return (
        <Page>
            {/* {addFriend && <NewContact setAddFriend={setAddFriend}/>} */}
            <Header />
            <Nav selected={selected} selectPage={selectPage} />
            {selected ?
                <List>
                    {friendList}
                </List>
                :
                <List>
                    <NewContact updateContacts={updateContacts} setUpdateContacts={setUpdateContacts}/>
                    {contactList}
                </List>
            }
            {/* {!addFriend && <FloatingButton setAddFriend={setAddFriend}/>} */}
        </Page>
    )
}

export default HomePage;