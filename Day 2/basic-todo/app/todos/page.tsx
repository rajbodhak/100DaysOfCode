import TodoContainer from "@/components/TodoContainer";

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};

const getTodos = async () => {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    return data.todos;
}

const page = async () => {
    const todos = await getTodos();
    return (
        <>
            <h1 className="text-center underline font-bold text-3xl p-5">Todos</h1>
            <div className="font-lexendGiga p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen gap-6 ">

                {todos.map((todo: Todo) => (
                    <TodoContainer key={todo.id} todo={todo.todo} isCompleted={todo.completed} />
                ))}
            </div>
        </>
    )
}

export default page
