import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PulseLoader from '../components/Pulseloader';
import KategorijaMain from '../components/KategorijaMain';

const Kategorija = () => {
  const { cat } = useParams();
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
          <>
            {/* Your content goes here */}
            <Navbar />
            <KategorijaMain parametar={cat} />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Kategorija;
