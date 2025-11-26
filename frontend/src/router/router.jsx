import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Board from '../pages/Board'
import Logout from '../pages/Logout'
import MyMessages from '../pages/MyMessages'
import AuthGuard from '../components/AuthGuard'

const router = createBrowserRouter([
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Board />
            },
            {
                path: '/mymessages',
                element: <AuthGuard><MyMessages /></AuthGuard>
            }
        ]
    },
    {
        path: '/logout',
        element: <Logout />
    }
])

export default router