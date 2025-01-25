import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import MainApp from './MainApp';
import './index.css'; // If you have a global CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <MainApp />
        </Router>
    </React.StrictMode>
);