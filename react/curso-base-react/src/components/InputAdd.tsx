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
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
        </div>
    )
}