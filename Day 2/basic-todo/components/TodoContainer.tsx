import React from 'react'
import { Todo } from '@/lib/types'

const TodoContainer = ({ id, title, description, completed }: Todo) => {
    return (
        <div className="w-[400px] max-h-36 p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-center">
            <p className='text-white'>Todo: {id}</p>
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <p className='text-gray-300 mt-2 truncate max-w-xs'>{description || "No description"}</p>
            <p className="text-gray-300 mt-2">{completed ? "✅ Completed" : "❌ Not Completed"}</p>
        </div>
    );
};

export default TodoContainer;
