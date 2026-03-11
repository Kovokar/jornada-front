interface ITodoItemProps {
    id: number,
    label: string,
    concluido: boolean,
    onRemove(): void,
    onToggleConcluido(): void
}
export const TodoItem = ({ label, concluido, onRemove, onToggleConcluido }: ITodoItemProps) => {
    return (
        <li
            style={{
                color: concluido ? "green" : "black",
                textDecoration: concluido ? "line-through" : "none"
            }}
        >
            <input
                type="checkbox"
                checked={concluido}
                onChange={onToggleConcluido} // Corrigido: chama a função diretamente
            />
            {label}
            <button onClick={onRemove}>Remove</button>
        </li>
    )
}