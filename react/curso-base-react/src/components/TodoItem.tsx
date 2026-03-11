interface ITodoItemProps {
    id: number,
    label: string,
    concluido: boolean,
    onRemove(): void,
    onToggleConcluido(): void
}

export const TodoItem = ({ label, concluido, onRemove, onToggleConcluido }: ITodoItemProps) => {
    return (
        <li className={`todo-item ${concluido ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={concluido}
                onChange={onToggleConcluido}
            />
            <span className={`todo-label ${concluido ? 'completed' : ''}`}>
                {label}
            </span>
            <button className="todo-remove-btn" onClick={onRemove}>
                Remover
            </button>
        </li>
    )
}