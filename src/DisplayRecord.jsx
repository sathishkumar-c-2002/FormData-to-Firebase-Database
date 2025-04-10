import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from './firebase';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            const querySnapShot = await getDocs(collection(db, "contacts"));
            setContacts(querySnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h3>Submitted Contacts</h3>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name} - {contact.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;