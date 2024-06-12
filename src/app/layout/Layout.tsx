import { Space } from 'antd';

import { Outlet } from 'react-router-dom';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { SideMenu } from '@widgets/side-menu';

import styles from './styles.module.css';

export const Layout: React.FC = () => {
	return (
		<div className={styles.layout}>
			<Header />

			<main>
				<Space>
					<SideMenu />
					<Outlet />
				</Space>
			</main>

			<Footer />
		</div>
	);
};
