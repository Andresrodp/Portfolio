import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorElement from './components/errorElement/ErrorElement';
import InitialPage from './components/InitialPage/InitialPage';
import Home from './components/Home/Home';
import BookYou from './components/BookYou/BookYou';
import Countries from './components/Countries/Countries';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import PersonalDescription from './components/PersonalDescription/PersonalDescription';
import Calculadora from './components/calculadora/Calculadora';
import Profesor from './components/profesor/Profesor';

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
        path: '/proyectos',
        element: <Proyectos />
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
      },
      {
        path: '/calculadora',
        element: <Calculadora />
      },
      {
        path: '/profesor',
        element: <Profesor />
      }
    ]
  }
])

export default App;
