import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import PulseLoader from '../components/Pulseloader';

const Kategorija = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <PulseLoader />
        ) : (
          // Render your content when not loading
          <div>
            {/* Your content goes here */}
            <Navbar />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Kategorija;
