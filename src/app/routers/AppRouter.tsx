import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@app/layout';

// import { HomePage } from '@pages/homePage';

// import { Fallback } from '@shared/ui/fallback';

import { ROOT_PATH } from '@shared/constants';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: ROOT_PATH,
			element: <Layout />,
			// errorElement: <Fallback />,
			children: [
				{
					index: true,
					// element: <HomePage />
					element: <div>Home</div>
				}
			]
		}
	]);

	return <RouterProvider router={router} />;
};
