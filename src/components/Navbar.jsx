import Logo from '../assets/ikonice/logo.png';
import Hamburger from '../assets/ikonice/hamburger.png';
import Cart from '../assets/ikonice/cart.png';
import Logout from '../assets/ikonice/user-logout.png';
import { useEffect, useState } from 'react';
import Cancel from '../assets/ikonice/cancel.png';
import { database as db } from '../firebase/firebase.config';
import { ref, onValue, off } from 'firebase/database';
import '../App.css';

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleOpened = () => {
    setOpened((prev) => !prev);
  };

  const sidebarStyle = {
    opacity: opened ? '1' : '0',
    maxWidth: opened ? '256px' : '0',
    transition: 'opacity 0.4s ease-in-out, max-width 0.4s ease-in-out',
    zIndex: '999',
  };

  useEffect(() => {
    const unsubscribe = onValue(ref(db, 'kategorije/'), (querySnapShot) => {
      const data = querySnapShot.val() || {};
      const ctgArray = Object.values(data); // Convert object to array
      setCategories(ctgArray);
    });

    return () => {
      // Cleanup function to unsubscribe from Firebase listener
      off(ref(db, 'kategorije/'), 'value', unsubscribe);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mx-7 sm:mx-10 md:mx-20 h-[80px] border-b-2 border-[#111111]">
        <a
          onClick={handleOpened}
          className="cursor-pointer"
        >
          <img
            src={!opened ? Hamburger : ''}
            alt=""
            className="md:max-w-[30px] max-w-[20px] cursor-pointer transition-transform hover:scale-125 transform-gpu"
          />
        </a>
        <a href="/">
          <img
            src={Logo}
            alt=""
            className="md:max-w-[100px] max-w-[70px] cursor-pointer"
          />
        </a>
        <div className="flex gap-5">
          <a href="">
            <img
              src={Cart}
              alt=""
              className="md:max-w-[30px] max-w-[20px] cursor-pointer hover:animate-shake"
            />
          </a>
          <a href="">
            <img
              src={Logout}
              alt=""
              className="md:max-w-[30px] max-w-[20px] cursor-pointer transition-transform hover:scale-125 transform-gpu"
            />
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className="fixed h-screen w-64 bg-white text-black p-4 pt-8 border-r border-black transition ease-in-out"
        style={sidebarStyle}
      >
        <a
          className="flex justify-end items-end"
          onClick={handleOpened}
        >
          <img
            src={Cancel}
            alt=""
            className="md:max-w-[30px] max-w-[20px] cursor-pointer transition-transform hover:scale-125 transform-gpu"
          />
        </a>
        <ul className="mt-5 text-left">
          {categories.map((item, index) => (
            <li
              key={index}
              className="mb-2 border-b-[1px] text-lg border-gray-500 transition-transform hover:scale-105 transform-gpu hover:text-[#4d4d4d]"
            >
              <a href={'/kategorija/' + item.toLowerCase().replace(/ /g, '_')}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
