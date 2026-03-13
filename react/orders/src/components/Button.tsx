import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

export function Button({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    iconPosition = 'right',
    children,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseClass =
        'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClass = {
        primary:
            'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md',
        secondary:
            'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
        ghost: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    };

    const sizeClass = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
        </button>
    );
}
