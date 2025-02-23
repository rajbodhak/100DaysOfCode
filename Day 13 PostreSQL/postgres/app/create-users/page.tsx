"use client"
import { useState } from 'react'

const CREATE = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("/api/add-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, email: email })
            })
            if (!response.ok) {
                throw new Error("Failed to save score");
            };

            await response.json();
            setMessage("User added successfully! ✅");
            setName("");
            setEmail("");
        } catch (error) {
            console.error("user add Error", error);
            setMessage("Error adding user ❌");
        }
    }
    return (
        <div className='flex flex-col items-center py-8 px-6'>
            <h1 className='text-3xl font-bold text-center'>Create an User</h1>
            <form onSubmit={createUser} className='max-w-md mx-auto p-4 bg-black/30 backdrop-blur-md border border-white/20'>
                <div className='mb-4'>
                    <label htmlFor="name" className='block text-gray-500 text-md font-bold mb-2'>Enter Name: </label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-transparent focus:outline-none focus:shadow-outline'
                        placeholder='Enter Name'
                        required
                    />
                    <label htmlFor="email" className='block my-3 text-gray-500 text-md font-bold mb-2'>Enter Email: </label>
                    <input
                        id='email'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-transparent focus:outline-none focus:shadow-outline'
                        placeholder='Enter Email'
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

export default CREATE;
