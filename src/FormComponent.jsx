import React, {useState} from 'react';
import {db} from './firebase';
import { collection, addDoc } from 'firebase/firestore';



const FormComponent=()=>{

    const [name,setName] = useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage] = useState('');

    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const docRef = await addDoc(collection(db,"contacts"),{
                name:name,
                email:email,
                message:message,
                createdAt: new Date(),
            });
            console.log("Document written with ID: ",docRef.id);
            setSubmitted(true);

            setName('');
            setEmail('');
            setMessage('');
        }
        catch(error){
            console.error("error: ",error);
        }
    };

    if (submitted){
        return(
            <div>
                <p>Submitted Successfully</p>
            </div>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <div>
            <label>Name</label>
            <input type="text"  value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div>
            <label>Email</label>
            <input type="email"  value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div>
            <label>Message</label>
            <input type="text"  value={message} onChange={(event)=>setMessage(event.target.value)}/>
            </div>

            <button type="submit">Submit</button>
        </form>
        
    )
}

export default FormComponent;

