import { ProductsContext } from '@/context/useProductsContext';

import React, { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { navLinks } from '/src/navLinks.js';
import logo from './../assets/logo.svg';
import hamburgerMenu from './../assets/menu.svg';
import closeMenu from './../assets/close.svg';
import searchMagnifier from './../assets/search-magnifier.svg';
import ShoppingCart from './../assets/shopping-cart.svg';
import { userContext } from '@/context/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Nav = () => {
  const itemsContext = useContext(ProductsContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const UserContext = useContext(userContext);

  const { searchTerm, setSearchTerm } = itemsContext
  const { login, deleteSession, user,role } = UserContext //* destructure user context

  const handleLogOut = () => {
    toast.success(' you have logout!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    deleteSession()
   
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //  todo : need to fix search magnifier glass on input 

  const filteredNavLinks = navLinks
    .filter(link => {
      if (login && (link.path === '/login' || link.path === '/register')) {
        return false; // Exclude "Login" and "Register" links if the user is logged in
      }
      return true; // Include all other links
    });

  // Conditionally add "Dashboard" link if the user has an ADMIN role
  if (role === 'ADMIN') {
    filteredNavLinks.push({
      name: 'Dashboard',
      path: '/dashboard',
    });
  }

  return (
    <>
      {/* desktop menu */}
      <nav className='flex flex-wrap justify-around relative min-h-[72px] bg-blue-700 items-center p-4'>
        <section className='flex  items-center justify-center gap-2'>
          <aside>
            <NavLink to='/'>
              <img
                width={38}
                src={logo} alt="logo" />
            </NavLink>
          </aside>
          <section
          >
            <button
              className="flex items-center space-x-2"
              onClick={toggleMenu}
            >
              <img className="w-6" src={menuOpen ? closeMenu : hamburgerMenu} alt="menu icon" />
              <p className=' rounded-sm  px-4 py-2 text-sm font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-500 '>{menuOpen ? 'Close' : 'Menu'}</p>
            </button>
          </section>
        </section>

        <ul
          className={`absolute z-30 p-4 transform transition-transform duration-300 ease-in-out bg-white text-black shadow-md rounded-md left-0  top-full w-full ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
            }`}
        >
          {filteredNavLinks.map(link => (
            <li key={link.path} className="border-b">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-800'
                }
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          
        </ul>

        <form className=" flex justify-center  items-center ">
          <input
            className="  flex  py-4 rounded-l-sm text-black w-48 my-2 lg:w-96 pl-10"
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            value={searchTerm}
            placeholder={user ? `${user.first_name}, how can I help?` : 'How can I help?'}

          />
          <div
            className='flex bg-white p-4 my-2 rounded-r-sm text-black  '
          >
            <img
              width={30}
              src={searchMagnifier} alt="search magnifier glass " />
          </div>
        </form>
        <section className='flex flex-col md:flex-row items-center  justify-end w-1/2  gap-4'>

          <section className='relative flex '>
            <NavLink to="checkout">
              <img

                src={ShoppingCart} alt='shopping cart' />
              <div className='absolute text-center top-0 right-0  rounded-full bg-yellow-400 min-w-[28px] min-h-[28px]'>
                <span className=' text-center p-2 '> 100  </span>
              </div>
            </NavLink>
          </section>
          <section className='flex  items-center justify-center gap-2'>
            {login ? (
              <>
                <NavLink
                  to="/"
                  onClick={handleLogOut}
                  className='flex rounded-sm items-center gap-2 px-4 py-2 text-sm font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-500'
                >
                  Logout
                </NavLink>
              </>) : (<>
                <NavLink
                  to="/login"
                  className='flex rounded-sm items-center gap-2 px-4 py-2 text-sm font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-500'
                >
                  Sign In
                </NavLink></>)}
          </section>
        </section>
      </nav>
      <Outlet />
      
    </>
  );
};

export default Nav;