// src/Layout/user/UserLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer'; // Footer cho user
import Header from '../../Component/header';

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
