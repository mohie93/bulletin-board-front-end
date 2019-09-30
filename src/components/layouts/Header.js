import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div style={headerStyle}>
            <h2>Bulletins Board</h2>
            <Link style={linkStyle} to="/" >Home </Link> {' '} || {' '} <Link style={linkStyle} to="/Create" >Create </Link>
        </div>
        )
}

const headerStyle = {
        textAlign: 'center',
        background: '#2b579e',
        color: 'white',
        padding: '5px',
        borderRadius: '4px 4px 0px 0px',
        marginBottom: '8px'
}

const linkStyle = { textDecoration: 'none',color: 'white'}

