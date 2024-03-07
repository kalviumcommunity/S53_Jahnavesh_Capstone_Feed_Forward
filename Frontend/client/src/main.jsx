import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Auth0Provider
          domain="dev-ds0dprrrpymjwr4s.us.auth0.com"
          clientId="YJ9GYNHldk2ocWdmPviD44gEUgTkpteH"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0Provider>,
    </BrowserRouter>
);