import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = () => {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (window.scrollY >= 100 || window.location.pathname === '/ComingSoon') {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [location]);


  const ChangeBackground = () => {
    if (window.scrollY >= 100 || window.location.pathname === '/ComingSoon') {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', ChangeBackground);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Nav navbar={navbar} />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
