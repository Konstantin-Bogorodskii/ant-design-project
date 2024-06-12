import styles from './styles.module.css';
import { Typography } from 'antd';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Typography.Link
				href="https://policies.google.com/privacy"
				target={'_blank'}>
				Privacy Policy
			</Typography.Link>
			<Typography.Link
				href="https://policies.google.com/terms"
				target={'_blank'}>
				Terms of Use
			</Typography.Link>
		</footer>
	);
};
