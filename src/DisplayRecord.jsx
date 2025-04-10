import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from './firebase';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const querySnapShot = await getDocs(collection(db, "contacts"));
            setContacts(querySnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchContacts();
    }, []);

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Submitted Contacts
            </Typography>
            <Paper elevation={3} style={{ padding: '1rem' }}>
                <List>
                    {contacts.map((contact) => (
                        <ListItem key={contact.id} divider>
                            <ListItemText
                                primary={contact.name}
                                secondary={contact.email}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default ContactList;