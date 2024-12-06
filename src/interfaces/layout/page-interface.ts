import { ReactNode } from "react";

export interface IPageProps {
    children: ReactNode;
    container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fluid';
    className?: string;
}