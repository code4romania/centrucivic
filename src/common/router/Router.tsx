import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';
import Organizations from '../../pages/organizations/Organizations';
import Layout from '../containers/Layout';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import Services from '../../pages/services/Services';
import Organization from '../../pages/organizations/Organization';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Landing page */}
          <Route index element={<Landing />}></Route>

          {/* Services page */}
          <Route path="services" element={<Services />}></Route>

          {/* NGO list page */}
          <Route path="organizations" element={<Organizations />}></Route>

          {/* NGO details page */}
          <Route path="organizations/:id" element={<Organization />}></Route>

          {/* Contact page */}
          <Route path="contact" element={<Contact />}></Route>

          {/* About page */}
          <Route path="about" element={<About />}></Route>
        </Route>

        {/* Wild Card */}
        <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
