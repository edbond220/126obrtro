import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { registerSW } from 'virtual:pwa-register';
import ReloadPrompt from '@components/ReloadPrompt/ReloadPrompt';

import Router from '@/Router';

import './styles/global.css';

const intervalMS = 60 * 60 * 1000;
//
// const updateSW = registerSW({
//   onRegisteredSW(swUrl, r) {
//     r &&
//       setInterval(async () => {
//         if (!(!r.installing && navigator)) return;
//
//         if ('connection' in navigator && !navigator.onLine) return;
//
//         const resp = await fetch(swUrl, {
//           cache: 'no-store',
//           'cache-control': 'no-cache',
//         });
//
//         if (resp?.status === 200) await r.update();
//       }, intervalMS);
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <ReloadPrompt />
  </React.StrictMode>
);
