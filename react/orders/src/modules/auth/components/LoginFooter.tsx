import type { ReactNode } from 'react';
import { Divider } from '../../../components/Divider';
import { Link } from '../../../components/Link';

export function LoginFooter(): ReactNode {
    return (
        <div className="space-y-4">
            <Divider />

            <p className="text-center text-sm text-gray-600">
                Ainda não tem uma conta?{' '}
                <Link href="/register" className="text-xs">
                    Criar conta agora
                </Link>
            </p>
        </div>
    );
}
