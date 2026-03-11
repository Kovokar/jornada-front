import { useState } from "react";

interface ITodoItemProps {
    id: number,
    label: string,
    concluido: boolean,
    onRemove(): void,
    onToggleConcluido(): void
}

export const TodoItem = ({ label, concluido, onRemove, onToggleConcluido }: ITodoItemProps) => {
    const [isRemoving, setIsRemoving] = useState(false);

    const handleRemove = () => {
        setIsRemoving(true);
        setTimeout(() => {
            onRemove();
        }, 400);
    }

    return (
        <li className={`todo-item ${concluido ? 'completed' : ''} ${isRemoving ? 'removing' : ''}`}>
            <input
                type="checkbox"
                checked={concluido}
                onChange={onToggleConcluido}
            />
            <span className={`todo-label ${concluido ? 'completed' : ''}`}>
                {label}
            </span>
            <button className="todo-remove-btn" onClick={handleRemove}>
                Remover
            </button>
        </li>
    )
}