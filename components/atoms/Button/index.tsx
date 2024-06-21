import clsx from 'clsx';
import { ReactElement } from 'react';

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
    variant?: 'fill' | 'transparent' | 'gradient';
    Icon?: React.ReactNode
}

const Button: React.FC<PrimaryButtonProps> = ({
    text,
    variant = 'fill',
    className,
    Icon,
    ...props
}) => {
    return (
        <button
            type="button"
            className={clsx(
                'flex items-center justify-center text-white text-xl p-2 duration-300 rounded-lg',
                className,
                {
                    'bg-black': variant === 'fill',
                    'bg-transparent hover:bg-primary border border-primary':
                        variant === 'transparent',
                    'bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600':
                        variant === 'gradient',
                }
            )}
            {...props}
        >
            {Icon}
            {/* {Icon && <Icon className="h-4 w-4 mr-1" />} */}
            {text}
        </button>
    );
};

export default Button;
