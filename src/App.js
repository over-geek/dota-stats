import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroDetail from './Pages/HeroDetail';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:heroName" element={<HeroDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
