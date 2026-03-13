import type { ReactNode } from 'react';
import { Checkbox } from '../../../components/Checkbox';

interface RememberMeCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function RememberMeCheckbox({
    checked,
    onChange,
}: RememberMeCheckboxProps): ReactNode {
    return (
        <Checkbox
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            label="Lembrar me neste dispositivo"
        />
    );
}
