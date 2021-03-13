import React from 'react';
import gif from '../assets/images/docBg.gif';

function Personal() {
    return (
        <div>
            <div>
            <h1 style={{color: 'black'}}>Welcome to your personal drawer</h1>
            <p>One stop destination for all your personal documents.</p>
            </div>
            <div>
                <img  src={gif} alt="This is a gif" />
            </div>
        </div>
    )
}

export default Personal
