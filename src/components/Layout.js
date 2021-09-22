import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import './Layout.scss';

const Layout = ({ children }) => (
  <div className="container">
    <Navbar />
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;