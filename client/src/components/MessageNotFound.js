import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function MessageNotFound() {
    const location = useLocation();
    const err = location.state;
    console.log(err);
    return (
        <div className = "jumbotron">
        { err !== undefined && err !== null ? <h1 className = "">{ err }</h1> : 'No error found.<br>' }
        <Link to = ".." className = "btn btn-primary">Back Home</Link>
       </div>
    );
};