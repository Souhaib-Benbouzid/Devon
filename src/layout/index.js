import React from 'react';

import Loading from './loading';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import Main from './main';
import { makeStyles } from '@material-ui/core/styles';

import avatar from '../assets/png/avatar.png';
import {
  FcHome,
  FcAbout,
  FcOnlineSupport,
  FcKey,
  FcPlus,
  FcBarChart,
} from 'react-icons/fc';

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyle();
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

  const footer = {
    links: [
      { path: 'https://www.sohaibbenbouzid.com/', name: 'Hire Me' },
      { path: 'https://www.sohaibbenbouzid.com/', name: 'About Us' },
      { path: 'https://www.sohaibbenbouzid.com/', name: 'Blog' },
      { path: 'https://www.sohaibbenbouzid.com/', name: 'Licence' },
    ],
    copyright: {
      date: '2020',
      text: 'Sohaib Benbouzid',
      link: 'https://www.sohaibbenbouzid.com',
    },
  };

  return (
    <div className={classes.root}>
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
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
