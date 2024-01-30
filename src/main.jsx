import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { database as db } from './firebase/firebase.config';
import { ref, onValue, off } from 'firebase/database';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Page404 from './pages/404.jsx';
import Kategorija from './pages/Kategorija.jsx'
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/kategorija/:cat',
    element: <Kategorija />,
  },
]);

import App from './App.jsx';
import Kategorija from './pages/Kategorija.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

const Main = () => {
  const [router, setRouter] = useState(null);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, 'kategorije/'), (querySnapShot) => {
      const data = querySnapShot.val() || {};
      
      const routerElements = data.map((key) => ({
        path: `/kategorija/${key.toLowerCase().replace(/ /g, '_')}`,
        element: <Kategorija cat_name={key.toLowerCase().replace(/ /g, '_')}/>,
      }));

      // Add additional routes if needed
      routerElements.push({
        path: '/',
        element: <App />,
      });

      routerElements.push({
        path: '/:bilosta',
        element: <Page404 />,
      });

      routerElements.push({
        path: '/kategorija/:bilosta',
        element: <Page404 />,
      });

      // Update the router
      setRouter(createBrowserRouter(routerElements));
      console.log(data)
    });

    return () => {
      // Cleanup function to unsubscribe from Firebase listener
      off(ref(db, 'kategorije/'), 'value', unsubscribe);
    };
  }, []);

  return (
    <React.StrictMode>
      {router && <RouterProvider router={router} />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
