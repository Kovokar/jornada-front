export const TodoList = ({ children }: React.PropsWithChildren) => {
    return (
        <ol>
            {children}
        </ol>
    )
}