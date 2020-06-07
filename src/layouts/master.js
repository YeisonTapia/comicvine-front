import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const Layout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
export default Layout;