import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import { validateProps } from './utils/validation';
import Joi from 'joi';
import { BrowserRouter } from 'react-router-dom';

// styling
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContactApp />
    </BrowserRouter>
)