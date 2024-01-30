import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PulseLoader from '../components/Pulseloader';
import KategorijaMain from '../components/KategorijaMain';
import { database as db } from '../firebase/firebase.config';
import { ref, onValue, off } from 'firebase/database';

const Kategorija = (props) => {
  const { cat } = useParams();
  const [loading, setLoading] = useState(true);

  const [ catContent, setCatContent ] = useState([])

  useEffect(() => {
    const unsubscribe = onValue(ref(db, 'proizvodi/' + props.cat_name), (querySnapShot) => {
      const data = querySnapShot.val() || {};
      const ctgArray = Object.values(data); // Convert object to array
      setCatContent(ctgArray);
      setLoading(false)
    });

    return () => {
      // Cleanup function to unsubscribe from Firebase listener
      off(ref(db, 'proizvodi/' + props.cat_name), 'value', unsubscribe);
    };
  }, [cat]);

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
            <KategorijaMain parametar={props.cat_name} catContent={catContent} />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Kategorija;
