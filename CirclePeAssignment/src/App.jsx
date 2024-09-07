
import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './SearchResults';
import Transaction from './Transaction';
import SlideUpPage from './SlideUpPage'; // Import the SlideUpPage component
import EligibilitySteps from './EligibilitySteps';
import Rentconversion from './Rentconversion.jsx';
import Onestepaway from './Onestepaway.jsx';
import Myfoot from './Myfoot.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/paywithcircle" element={<EligibilitySteps />} />
        <Route path="/onestepaway" element={<Onestepaway />} />
      </Routes>
      <Myfoot/>
    </div>
  );
}

export default App;