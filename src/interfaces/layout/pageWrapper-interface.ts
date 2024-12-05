import { ReactElement, ReactNode } from "react";
import { IPageProps } from "./page-interface";

export interface IPageWrapperProps {
	isProtected?: boolean;
	title?: string;
	description?: string;
	children:
		| ReactNode
		| ReactElement<IPageProps>
		| ReactElement<IPageProps>[];
	className?: string;
}
