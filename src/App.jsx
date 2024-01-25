import React from 'react';

import Landing from './Pages/Landing';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className="font-medium ">
      <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
    </div>
  )
}