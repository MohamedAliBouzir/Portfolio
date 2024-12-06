import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface ITagWrapper extends Record<string, any>, HTMLAttributes<HTMLElement> {
	children: ReactNode;
	tag: ElementType;
}
