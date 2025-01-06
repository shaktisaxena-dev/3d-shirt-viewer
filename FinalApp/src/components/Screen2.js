import React, { useState } from 'react';
import './NewStyleAI.css';

const Screen3 = ({ onHome }) => {
    const [url, setUrl] = useState('');
    const [displayedImage, setDisplayedImage] = useState('');

    const fetchImage = () => {
        // Set the displayed image to the URL entered
        setDisplayedImage(url);
    };

    return (
        <div className="styleai-container">
            <h1 className="styleai-header">Enter URL</h1>
            <input 
                type="text" 
                placeholder="Enter image URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
            />
            <button onClick={fetchImage} style={{ float: 'left' }}>Go</button>
            <button onClick={onHome} style={{ float: 'left', marginLeft: '10px' }}>Home</button>

            {displayedImage && (
                <div className="image-container">
                    <h3>Fetched Image:</h3>
                    <img src={displayedImage} alt="Fetched" style={{ maxWidth: '400px', maxHeight: '400px' }} />
                </div>
            )}
        </div>
    );
};

export default Screen3;