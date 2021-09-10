import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

import './Layout.scss';

const Layout = ({ children }) => (
  <div className="container">
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;