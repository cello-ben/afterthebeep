import React, { useContext, useEffect } from 'react';
import { Context } from '../context/GlobalState';

import Message from './Message';

export default function MessageList(props) {
    const { entries, getEntries } = useContext(Context);
    useEffect(() => {
        getEntries();
    }, [getEntries]);
    return (
        <>
            { entries.map(elem => { return <Message key = { elem._id } text = { elem.text } /> })}
        </>
    );
};