import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './Root'
import HomePage from './pages/Home';
import PopularPage from './pages/Popular';
import Top_Rated from './pages/TopRated';
import ExplorePage from './pages/Explore';
import DetailsMovie from './pages/DetailsMovie';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/popular',
          element: <PopularPage />,
        },
        {
          path: '/explore',
          element: <ExplorePage />,
        },
        {
          path: '/top_rated',
          element: <Top_Rated />,
        },
        {
          path: '/movie',
          element: <DetailsMovie />,
        },
        {
          path: '/movie/:id',
          element: <DetailsMovie />,
        },
      ],
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
