import { createRoot } from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { LazyAbout } from '@/pages/About/About.lazy';
import { Shop } from '@/pages/Shop';
import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root is not found')
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={'Loading...'}> <LazyAbout /> </Suspense>,
            },
            {
                path: "/shop",
                element: <Suspense fallback={'Loading...'}> <Shop /> </Suspense>,
            }
        ]
    },
]);

createRoot(root).render(<RouterProvider router={router} />);