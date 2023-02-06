import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Context } from '../context/GlobalState';

export default function SingleMessage() {
    const { entries, getEntries } = useContext(Context);
    useEffect(() => {
        getEntries();
    }, [getEntries]);

    const id = useParams();

    const entry = entries.filter(elem => elem._id === id.id);

    if(!entry) {
        //TODO
    }

    return (
        
        <div className = "container mt-4">
        { entries !== null && entries !== undefined && entries.length !== 0 ? 
        <>
        <Link to = "/" className = "btn btn-primary">Back</Link>
        <p>{ entry[0] !== undefined ? entry[0].text : 'Message not found.'} </p>
        </>
        : 'Loading...'}
        </div>
    );
};