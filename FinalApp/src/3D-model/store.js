import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#ffffff',
    // logoDecal: './pattern.jpeg',
    // fullDecal: './pattern.jpeg',
    isFullTexture: false,
    isLogoTexture: false,
});

export default state;
