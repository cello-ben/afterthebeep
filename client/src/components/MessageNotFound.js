import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function MessageNotFound() {
    const location = useLocation();
    const err = location.state;
    console.log(err);
    return (
        <div className = "jumbotron">
        { err !== undefined && err !== null ? <h1>{ err }</h1> : <h1>Error</h1> }
        <Link to = ".." className = "btn btn-primary">Back Home</Link>
       </div>
    );
};