import React from 'react';

import Loading from './loading';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import Main from './main';

import avatar from '../assets/png/avatar.png';
import {
  FcHome,
  FcAbout,
  FcOnlineSupport,
  FcKey,
  FcPlus,
  FcBarChart,
} from 'react-icons/fc';

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const user = {
    username: 'sohaib benbouzid',
    email: 'sohaib.code@gmail.com',
    avatarUrl: avatar,
  };

  const iconStyle = {
    width: '23px',
    height: '23px',
  };
  const navLinks = [
    { path: '/', name: 'home', icon: <FcHome style={iconStyle} /> },
    {
      path: '/about',
      name: 'about',
      icon: <FcAbout style={iconStyle} />,
    },
    {
      path: '/contact',
      name: 'contact',
      icon: <FcOnlineSupport style={iconStyle} />,
    },
  ];
  const handleUserLinks = {
    login: {
      path: '/login',
      name: 'login',
      icon: <FcKey style={iconStyle} />,
    },
    register: {
      path: '/register',
      name: 'register',
      icon: <FcPlus style={iconStyle} />,
    },
  };

  const Logo = {
    path: '/',
    icon: <FcBarChart style={iconStyle} />,
    name: 'Devon',
  };
  return (
    <div>
      <Loading />
      <Navbar
        navLinks={navLinks}
        setOpenSidebar={setOpenSidebar}
        setAuth={setAuth}
        auth={auth}
        handleUserLinks={handleUserLinks}
        Logo={Logo}
      />
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        setAuth={setAuth}
        auth={auth}
        user={user}
        navLinks={navLinks}
        handleUserLinks={handleUserLinks}
        Logo={Logo}
      />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
