import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function SingleMessage() {
    
    const params = useParams();
    const id = params.id;

    const [state, setState] = useState();

    useEffect(() => {
        async function getSingleEntry(id) {
            const res = await axios.get(`/api/v1/entries/message/${id}`, {
                validateStatus: (status) => {
                    console.log('Status validated.');
                    return status <= 500;
                }
            });
            setState(res);
            console.log(state)
        }
        getSingleEntry(id);
    }, [state, id]);


    return (  
        <div className = "container mt-4">
            { state !== null && state !== undefined ? 
                 <>  
                 { !state.error ? 
                 <>
                <Link to = "/" className = "btn btn-primary">Back</Link>
                <p>{ state.data.entry !== undefined ? state.data.entry.text : <Navigate to = "/error" state = { state.data.error } /> } </p> </>
                
            : 'Not found.' } </> : 'Loading...'}       
        </div> 
    );
};