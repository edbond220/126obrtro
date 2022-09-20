import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import './reloadPrompt.css';

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="reloadPrompt-container">
      {(offlineReady || needRefresh) && (
        <div className="reloadPrompt-toast">
          <div className="reloadPrompt-message">
            {offlineReady ? (
              <span>Додаток оновився</span>
            ) : (
              <span>New content available, click on reload button to update.</span>
            )}
          </div>
          {needRefresh && (
            <button className="reloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>
              Reload
            </button>
          )}
          <button className="reloadPrompt-toast-button" onClick={() => close()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
