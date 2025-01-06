import React, { useState } from 'react';
import './NewStyleAI.css';

const Screen3 = ({ onHome }) => {
    const [url, setUrl] = useState('');

    return (
        <div className="styleai-container">
            <h1 className="styleai-header">Enter URL</h1>
            <input 
                type="text" 
                placeholder="Enter image URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
            />
            <button onClick={onHome} style={{ float: 'left' }}>Home</button>
        </div>
    );
};

export default Screen3;
