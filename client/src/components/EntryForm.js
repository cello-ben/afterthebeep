import React, { useState, useContext } from 'react';
import { Context } from '../context/GlobalState';

export default function EntryForm() {
    const [message, setMessage] = useState('');
    const { addEntry } = useContext(Context);

    function handleSubmit(event) {
        event.preventDefault();
        addEntry(message);
    }

    return (
        <form onSubmit= { handleSubmit }>
            <textarea 
            value = { message } 
            onChange = { (event) => setMessage(event.target.value) } 
            placeholder = "Enter your message for the world."
            />
            <input type = "submit" />
        </form>
    )
}