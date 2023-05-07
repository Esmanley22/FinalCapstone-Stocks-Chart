import './css/bootstrap.scss';
import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { FronteggProvider } from '@frontegg/react';


const contextOptions = {
  baseUrl: 'https://app-j449pk9fj81q.frontegg.com',
  clientId: '0df2a854-4753-4382-865f-94e53f1b991c'
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>,
);
