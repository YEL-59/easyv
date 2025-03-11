import ChatLayout from '@/layouts/chat-layout';
import DashboardLayout from '@/layouts/dashboard-layout';
import MainLayout from '@/layouts/main-layout';
import Signin from '@/pages/auth/signin';
import Signup from '@/pages/auth/signup';
import Chat from '@/pages/dashboard/chat';
import Conversation from '@/pages/dashboard/conversation';
import About from '@/pages/main/about/about';
import Home from '@/pages/main/home/home';
import Pricing from '@/pages/main/pricing/pricing';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
    ],
  },
  {
    path: '/dashboard',
    exact: true,
    element: <DashboardLayout />,
    children: [
      {
        path: 'chat',
        element: <ChatLayout />,
        children: [
          {
            index: true,
            element: <Chat />,
          },
          {
            path: ':id',
            element: <Conversation />,
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    element: <h1>About Page</h1>,
  },
  {
    path: '/contact',
    element: <h1>Contact Page</h1>,
  },

  {
    path: 'sign-in',
    element: <Signin />,
  },
  {
    path: 'sign-up',
    element: <Signup />,
  },
]);
