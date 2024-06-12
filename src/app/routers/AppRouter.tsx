import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@app/layout';

import { HomePage } from '@pages/home-page';
import { InventoryPage } from '@pages/inventory-page';
import { OrdersPage } from '@pages/orders-page';
import { CustomersPage } from '@pages/customets-page';

// import { Fallback } from '@shared/ui/fallback';

import { ROOT_PATH, INVENTORY_PATH, ORDERS_PATH, CUSTOMERS_PATH } from '@shared/constants';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: ROOT_PATH,
			element: <Layout />,
			// errorElement: <Fallback />,
			children: [
				{
					index: true,
					element: <HomePage />
				},
				{
					path: INVENTORY_PATH,
					element: <InventoryPage />
				},
				{
					path: ORDERS_PATH,
					element: <OrdersPage />
				},
				{
					path: CUSTOMERS_PATH,
					element: <CustomersPage />
				}
			]
		}
	]);

	return <RouterProvider router={router} />;
};
