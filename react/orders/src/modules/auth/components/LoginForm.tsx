import { useState, type ReactNode } from 'react';
import { Button } from '../../../components/Button';
import { useAuth, type LoginCredentials } from '../hooks/useAuth';
import { EmailField } from './EmailField';
import { PasswordField } from './PasswordField';
import { RememberMeCheckbox } from './RememberMeCheckbox';
import { LoginFooter } from './LoginFooter';

interface FormErrors {
    email?: string;
    password?: string;
    general?: string;
}

export function LoginForm(): ReactNode {
    const [formData, setFormData] = useState<LoginCredentials>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const { isLoading, error, login, clearError } = useAuth();

    const handleEmailChange = (email: string): void => {
        setFormData((prev) => ({ ...prev, email }));
        if (formErrors.email) {
            setFormErrors((prev) => ({ ...prev, email: undefined }));
        }
        if (error?.field === 'email') {
            clearError();
        }
    };

    const handlePasswordChange = (password: string): void => {
        setFormData((prev) => ({ ...prev, password }));
        if (formErrors.password) {
            setFormErrors((prev) => ({ ...prev, password: undefined }));
        }
        if (error?.field === 'password') {
            clearError();
        }
    };

    const handleRememberMeChange = (rememberMe: boolean): void => {
        setFormData((prev) => ({ ...prev, rememberMe }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setFormErrors({});

        await login(formData);
    };

    const displayError = error
        ? { [error.field || 'general']: error.message }
        : formErrors;

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {displayError.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">{displayError.general}</p>
                </div>
            )}

            <EmailField
                value={formData.email}
                error={displayError.email}
                onChange={handleEmailChange}
            />

            <PasswordField
                value={formData.password}
                error={displayError.password}
                onChange={handlePasswordChange}
            />

            {/* <RememberMeCheckbox
                checked={formData.rememberMe}
                onChange={handleRememberMeChange}
            /> */}

            {/* <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isLoading}
                disabled={isLoading}
            >
                Entrar
            </Button> */}

            {/* <LoginFooter /> */}
        </form>
    );
}
