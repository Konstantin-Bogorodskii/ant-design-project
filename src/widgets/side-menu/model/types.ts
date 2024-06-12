import { Routes } from '@shared/types';

export interface IMenuItem {
	label: string;
	key: Routes;
	icon?: React.ReactNode;
}
