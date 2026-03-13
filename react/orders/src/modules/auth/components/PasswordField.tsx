import type { ReactNode } from 'react';
import { Input } from '../../../components/Input';
import { Link } from '../../../components/Link';

interface PasswordFieldProps {
    value: string;
    error?: string;
    onChange: (value: string) => void;
}

const PasswordIcon = (): ReactNode => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export function PasswordField({
    value,
    error,
    onChange,
}: PasswordFieldProps): ReactNode {
    return (
        <div className="space-y-2">
            <Input
                type="password"
                placeholder="••••••••"
                label="Senha"
                value={value}
                error={error}
                onChange={(e) => onChange(e.target.value)}
                icon={<PasswordIcon />}
            />
            <div className="flex justify-end">
                <Link href="/forgot-password" className="text-xs">
                    Esqueceu a senha?
                </Link>
            </div>
        </div>
    );
}
