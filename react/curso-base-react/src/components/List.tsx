export const TodoList = ({ children }: React.PropsWithChildren) => {
    return (
        <ol className="todo-list">
            {children}
        </ol>
    )
}