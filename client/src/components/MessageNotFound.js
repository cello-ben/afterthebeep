import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MessageNotFound() {
    const location = useLocation();
    const err = location.state;
    console.log(err);
    return (
        <div className = "ml-4">
        { err !== undefined && err !== null ? <h1 className = "jumbotron">{ err }</h1> : 'No error found.' }
       
       </div>
    );
};