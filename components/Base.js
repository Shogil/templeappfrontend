import React from 'react'
import  '../styles/style.sass';

const Base = ({ children }) => {

    return (
        <div style={{ background: '#eee' }}>
            {children}
        </div>
    )

};

export default Base;