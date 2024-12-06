import React, { useState, useContext } from 'react';
import { Context } from '../context/GlobalState';

export default function EntryForm() {
    const [message, setMessage] = useState('');
    const { addEntry } = useContext(Context);

    function handleSubmit(event) {
        event.preventDefault();
        addEntry(message);
        setMessage('');
    }

    return (
        
        // <div className = "envelope">
        <div className = "m-4">
        <form onSubmit= { handleSubmit }>
            <textarea
            className = "message-field mx-auto" 
            value = { message } 
            onChange = { (event) => setMessage(event.target.value) } 
            placeholder = "Enter your message for the world."
            />
            
            <input className = "btn btn-primary submit-button" type = "submit" />
        </form>
        </div>
        // </div>
    )
}