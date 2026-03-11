import { useState } from "react"

interface IInputAddProps {
    onAdd(value: any): void
}

export const InputAdd = ({ onAdd }: IInputAddProps) => {
    const [value, setValue] = useState('')

    const handleAdd = () => {
        if (!value.trim()) return;
        onAdd(value);
        setValue('')
    }

    return (
        <div className="todo-input-wrapper">
            <input
                className="todo-input"
                type="text"
                placeholder="Adicione uma nova tarefa..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button className="todo-button" onClick={handleAdd}>
                Adicionar
            </button>
        </div>
    )
}