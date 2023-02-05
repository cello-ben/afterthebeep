import React from 'react';

export default function Message(props) {
    return (
        <p key = { props._id }>{ props.text }</p>
    )
}