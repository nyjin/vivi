import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Education = lazy(() => import('./pages/Education'));
const QA = lazy(() => import('./pages/QA'));
const Reservation = lazy(() => import('./pages/Reservation'));
const Contact = lazy(() => import('./pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: '/education',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Education />
          </Suspense>
        ),
      },
      {
        path: '/portfolio',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: '/qa',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <QA />
          </Suspense>
        ),
      },
      {
        path: '/reservation',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Reservation />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
