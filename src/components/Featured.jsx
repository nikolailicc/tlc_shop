import { Link } from 'react-router-dom';
import Kontroler from '../assets/features/kontroler.jpeg';
import Laptop from '../assets/features/laptop.jpeg';
import Napajanje from '../assets/features/napajanje.jpg';
import Tastatura from '../assets/features/tastatura.jpeg';
import Telefoni from '../assets/features/telefoni.jpg';
import Vr from '../assets/features/vr.jpg';

const Featured = () => {
  return (
    <div className="mt-16 mx-10">
      <h1 className="font-semibold text-3xl pb-16 text-center">
        Istaknuto za Vas
      </h1>
      <div className="pb-40">
        {/* Adjust the top padding value as needed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="h-80 p-4">
            {/* Your content for the first grid item */}
            <Link to="/kategorija/konzole_i_kontroleri">
              <img
                src={Kontroler}
                alt=""
                className="rounded-lg object-cover w-full h-full transition-transform hover:scale-105 transform-gpu transition-duration-300 cursor-pointer"
                style={{ transitionDelay: '0.1s' }}
              />
            </Link>
          </div>

          {/* Column 2 */}
          <div className="h-80 p-4">
            {/* Your content for the second grid item */}
            <Link to="/kategorija/laptopi">
              <img
                src={Laptop}
                alt=""
                className="rounded-lg object-cover w-full h-full transition-transform hover:scale-105 transform-gpu transition-duration-300 cursor-pointer"
                style={{ transitionDelay: '0.1s' }}
              />
            </Link>
          </div>

          {/* Column 3 */}
          <div className="h-80 p-4">
            {/* Your content for the third grid item */}
            <Link to="/kategorija/oprema">
              <img
                src={Napajanje}
                alt=""
                className="rounded-lg object-cover w-full h-full transition-transform hover:scale-105 transform-gpu transition-duration-300 cursor-pointer"
                style={{ transitionDelay: '0.1s' }}
              />
            </Link>
          </div>

          {/* Column 4 */}

          <div className="h-80 p-4">
            {/* Your content for the fourth grid item */}
            <Link to="/kategorija/tastature">
              <img
                src={Tastatura}
                alt=""
                className="rounded-lg object-cover w-full h-full transition-transform hover:scale-105 transform-gpu transition-duration-300 cursor-pointer"
                style={{ transitionDelay: '0.1s' }}
              />
            </Link>
          </div>

          {/* Column 5 */}
          <div className="h-80 p-4">
            {/* Your content for the fifth grid item */}
            <Link to="/kategorija/telefoni">
              <img
                src={Telefoni}
                alt=""
                className="rounded-lg object-cover w-full h-full transition-transform hover:scale-105 transform-gpu transition-duration-300 cursor-pointer"
                style={{ transitionDelay: '0.1s' }}
              />
            </Link>
          </div>

          {/* Column 6 */}
          <div className="h-80 p-4">
            {/* Your content for the sixth grid item */}
            <Link to="/kategorija/vr">
              <img
                src={Vr}
                alt=""
                className="rounded-lg object-cover w-full h-full transition-transform hover:scale-105 transform-gpu transition-duration-300 cursor-pointer"
                style={{ transitionDelay: '0.1s' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
