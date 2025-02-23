"use client"
import { useState } from 'react'

const DeleteUser = () => {
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");

    const deleteuser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("/api/delete-user", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: id })
            })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to Delete User");
            };

            setMessage("User Deleted successfully! ✅");
            setId("");
        } catch (error) {
            console.error("user Delete Error", error);
            setMessage("Error Deleting user ❌");
        }
    }
    return (
        <div className='flex flex-col items-center py-8 px-6'>
            <h1 className='text-3xl font-bold text-center'>Create an User</h1>
            <form onSubmit={deleteuser} className='max-w-md mx-auto p-4 bg-black/30 backdrop-blur-md border border-white/20'>
                <div className='mb-4'>
                    <label htmlFor="id" className='block text-gray-500 text-md font-bold mb-2'>Enter Id: </label>
                    <input
                        id='id'
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-transparent focus:outline-none focus:shadow-outline'
                        placeholder='Enter Name'
                        required
                    />
                </div>
                <button type='submit' className='px-4 py-2 text-slate-300 bg-blue-500/10 backdrop-blur-md rounded-lg transition-all duration-300 shadow-lg border border-white/10'>
                    Submit
                </button>
                {message && (
                    <p className="text-center mt-2 font-semibold text-white">{message}</p>
                )}
            </form>
        </div>
    )
}

export default DeleteUser;
