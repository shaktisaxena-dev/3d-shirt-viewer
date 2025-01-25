import React, { useState } from 'react';
import App3D from './3D-model/App';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
    const [show3DModel, setShow3DModel] = useState(false);

    const handleStyleAI = () => {
        setShow3DModel(!show3DModel);
    };

    return (
        <div>
            <Header handleStyleAI={handleStyleAI} show3DModel={show3DModel} />
            {!show3DModel && <Content />}
            {show3DModel && <App3D />}
            {!show3DModel && <Footer />}
            <Copyright />
        </div>
    );
}

export default App;