// NE ZABORAVI NA LINKOVE

import Instagram from '../assets/footer/ig.png';
import Olx from '../assets/footer/olx.png';

const Footer = () => {
  return (
    <footer className="flex flex-col h-40 gap-2 bg-[#4d4d4d] text-white items-center justify-center px-4">
      <div className="flex flex-row gap-3">
        {/* {OLX LINK} */}
        <a href="">
          <img
            src={Olx}
            alt=""
            className="max-w-[30px]"
          />
        </a>
        {/* {INSTAGRAM LINK} */}
        <a href="">
          <img
            src={Instagram}
            alt=""
            className="max-w-[30px]"
          />
        </a>
      </div>
      <div>
        <p className="text-center text-xs md:text-xs lg:text-sm xl:text-md">
          © 2024 TLC Tech Shop. All rights reserved. Web design & development: Xenum
        </p>
        {/* Add any additional information or links here */}
      </div>
    </footer>
  );
};

export default Footer;
