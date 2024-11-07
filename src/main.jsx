import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <Auth0Provider
    domain="dev-ob2zgf2rb2cj4emu.us.auth0.com"
    clientId="X6q6JipPL70RmcUcLLUU1jtukD8fRwlP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
     <StrictMode>
    <App />
    </StrictMode>
    </Auth0Provider>,
);
