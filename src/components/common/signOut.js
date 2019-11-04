import React from 'react';
import {useEffect} from 'react'
const Footer = (props) => {
    useEffect(()=>{
        localStorage.removeItem('ProliteToken');
        window.location = '/';
    }, [])
    return(<nav/>)
}

export default Footer;