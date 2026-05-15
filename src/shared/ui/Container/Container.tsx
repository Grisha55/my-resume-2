import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const maxWidthValues = {
    sm: '768px',
    md: '1024px',
    lg: '1152px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
};

export const Container = ({ children, className = '', maxWidth = 'lg' }: ContainerProps) => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: maxWidthValues[maxWidth],
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '1rem',
                paddingRight: '1rem',
            }}
            className={className}
        >
            {children}
        </div>
    );
};