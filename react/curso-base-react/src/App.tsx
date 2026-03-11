import { useEffect, useState } from "react"
import { InputAdd } from "./components/InputAdd"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/List"
import { TodoAPI, type ITodo } from "./shared/services/api/TodoAPI"

export function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll()
      .then(data => setList(data));
  }, []);


  const toggleConcluido = (id: number) => {
    TodoAPI.updateById(id, { concluido: !list.find(item => item.id === id)?.concluido }).
      then(() => {
        setList([
          ...list.map(item => ({
            ...item,
            concluido: item.id === id ? true : item.concluido
          }))
        ]);
      })
  }

  const handleAdd = (value: number) => {
    TodoAPI.create({ label: value, concluido: false })
      .then(newTodo => setList([...list, newTodo]));
  }

  const handleRemove = (id: number) => {
    TodoAPI.deleteById(id)
      .then(() => {
        setList([
          ...list.filter(item => item.id !== id),
        ]);
      });
  }


  return (
    <div>
      <InputAdd onAdd={handleAdd} />
      <TodoList>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            concluido={listItem.concluido}
            onRemove={() => handleRemove(listItem.id)}
            onToggleConcluido={() => toggleConcluido(listItem.id)}
          />
        ))}
      </TodoList>
    </div>
  )
}
