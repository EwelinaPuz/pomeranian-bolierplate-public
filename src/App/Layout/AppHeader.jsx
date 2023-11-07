import React from 'react';

import './styles/header.css';

// 1. Import SVG as React component
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
        {/* 1. sposób */}
        <PomeranianLogo />
        {/* 1. sposób */}
        {/* <img src={logo} alt="Logo" /> */}
      
    </header>
  );
}
