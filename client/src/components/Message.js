import React from 'react';
import { Link } from 'react-router-dom';

export default function Message(props) {
    return (
        <>
        <div className = "col-md-4">
        <div className = "card mb-4 shadow-s" key = { props._id }>
        <div className = "card-body mh-100">
            <p className = "card-text">{ props.text.substring(0, 100) }{ props.text.length > 100 ? <Link to = "/">...Read More</Link> : ''}</p>
            
        </div>
        </div>
        </div>
        
       </>
    )
}