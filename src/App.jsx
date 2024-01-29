import { useEffect, useState } from 'react';
import PulseLoader from './components/Pulseloader';
import Home from './pages/Home';

export default function App() {
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
            <Home />
          </div>
        )}
      </div>
    </>
  );
}
