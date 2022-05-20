import React from 'react';
import {createRoot} from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const divRoot = createRoot(document.getElementById('root'));
divRoot.render(<GifExpertApp/>);



