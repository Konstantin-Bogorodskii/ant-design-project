import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import {
	AppstoreOutlined,
	ShopOutlined,
	ShoppingCartOutlined,
	UserOutlined
} from '@ant-design/icons';

import { ROOT_PATH, INVENTORY_PATH, ORDERS_PATH, CUSTOMERS_PATH } from '@/shared/constants';

import { IMenuItem } from '../model/types';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

import styles from './styles.module.css';

const MENU_ITEMS: IMenuItem[] = [
	{
		label: 'Dashboard',
		key: ROOT_PATH,
		icon: <AppstoreOutlined />
	},
	{
		label: 'Inventory',
		key: INVENTORY_PATH,
		icon: <ShopOutlined />
	},
	{
		label: 'Orders',
		key: ORDERS_PATH,
		icon: <ShoppingCartOutlined />
	},
	{
		label: 'Customers',
		key: CUSTOMERS_PATH,
		icon: <UserOutlined />
	}
];

export const SideMenu = () => {
	const navigate = useNavigate();

	const onClick: MenuClickEventHandler = ({ key }) => {
		navigate(key);
	};

	return (
		<nav className={styles.sideMenu}>
			<Menu
				mode="vertical"
				items={MENU_ITEMS}
				onClick={onClick}
			/>
		</nav>
	);
};
