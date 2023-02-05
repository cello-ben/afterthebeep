import React, { useContext, useEffect } from 'react';
import { Context } from '../context/GlobalState';

import Message from './Message';

export default function MessageList(props) {
    const { entries, getEntries } = useContext(Context);
    useEffect(() => {
        getEntries();
    }, [getEntries]);
    return (
        <div className = "container mx-auto row">
            <h2 className = "text-center">Messages From The World</h2>
            { entries.map(elem => { return <Message key = { elem._id } text = { elem.text } /> })}
        </div>
        
    );
};