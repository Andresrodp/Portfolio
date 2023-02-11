import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorElement from './components/errorElement/ErrorElement';
import InitialPage from './components/InitialPage/InitialPage';
import Home from './components/Home/Home';
import BookYou from './components/BookYou/BookYou';
import Countries from './components/Countries/Countries';
import Blog from './components/Blog/Blog';
import Contacto from './components/Contacto/Contacto';
import PersonalDescription from './components/PersonalDescription/PersonalDescription';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <InitialPage />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/perfil',
        element: <PersonalDescription />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/bookyou',
        element: <BookYou />
      },
      {
        path: '/countries',
        element: <Countries />
      }
    ]
  }
])

export default App;
