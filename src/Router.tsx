import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Anxiety from '@pages/Anxiety/Anxiety';
import Contacts from '@pages/Contacts/Contacts';
import Help from '@pages/Help/Help';
import Main from '@pages/Main/Main';
import NotFound from '@pages/NotFound/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/help" element={<Help />} />
      <Route path="/anxiety" element={<Anxiety />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
