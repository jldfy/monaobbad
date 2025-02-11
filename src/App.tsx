import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Portfolio } from './components/Portfolio';
import { CaseStudy } from './components/CaseStudy';
import { ArtPortfolio } from './components/ArtPortfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="/art-portfolio" element={<ArtPortfolio />} />
    </Routes>
  );
}

export default App;