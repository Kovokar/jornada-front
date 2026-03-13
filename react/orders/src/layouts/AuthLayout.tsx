import type { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps): ReactNode {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
}
