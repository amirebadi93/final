import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home';
function Router() {
  return <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" />
      </Routes>
    </div>;
}

export default Router