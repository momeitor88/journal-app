import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root/View';
import { Page404 } from './pages/Page404/View';
import { LoginPage, RegisterPage } from '../auth/pages';


export const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//         <Root />
//     ),
//     children: [
//         {
//             path: '*',
//             element: (<Page404/>)
//         }
//     ]
//   },
  {
    path: '/auth/login',
    element: (
        <LoginPage />
    ),
  },
  {
    path: '/auth/register',
    element: (
        <RegisterPage />
    ),
  }
])
