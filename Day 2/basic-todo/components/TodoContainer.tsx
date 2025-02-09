import React from 'react'

type TodoProps = {
    todo: string,
    isCompleted: boolean
}
const TodoContainer = ({ todo, isCompleted }: TodoProps) => {
    return (

        <div className="w-[400px] min-h-36 p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-center">
            <h2 className="text-white text-xl font-semibold">{todo}</h2>
            <p className="text-gray-300 mt-2">{isCompleted ? "✅ Completed" : "❌ Not Completed"}</p>
        </div>

    )
}

export default TodoContainer
