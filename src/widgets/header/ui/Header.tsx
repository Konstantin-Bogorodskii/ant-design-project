import { Link } from 'react-router-dom';

import { Typography, Space, Badge } from 'antd';
import { MailOutlined, BellOutlined } from '@ant-design/icons';

import { ROOT_PATH } from '@shared/constants';

import styles from './styles.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={ROOT_PATH}>
				<Typography.Title style={{ marginBottom: 0, fontSize: 26 }}>
					MyDashboard
				</Typography.Title>
			</Link>

			<Space>
				<Badge
					count={10}
					dot>
					<MailOutlined className={styles.icon} />
				</Badge>
				<Badge count={2}>
					<BellOutlined className={styles.icon} />
				</Badge>
			</Space>
		</header>
	);
};
