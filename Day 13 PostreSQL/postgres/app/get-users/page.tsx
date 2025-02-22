"use client";
import { useState, useEffect } from 'react'

type UserEntry = {
    id: number,
    name: string,
    email: string
}
const GET_USERS = () => {
    const [users, setUsers] = useState<UserEntry[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/get-users");
                if (!response.ok) {
                    throw new Error("Data not fetched in LeaderBoard")
                }
                const data = await response.json();
                setUsers(data.users)
            } catch (error) {
                console.log("Data fetching Error in LeaderBoard Page", error);
            }
        }

        fetchUsers();
    }, [])
    return (
        <div className='w-full min-h-screen bg-gradient-to-bl from-white/40 via-black/40 to-white/30 flex flex-col items-center'>
            {users.map((user) => (
                <div key={user.id} className='max-w-md border border-white/50 flex justify-between items-center text-sm font-bold text-slate-200'>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
            ))}
        </div>
    )
}

export default GET_USERS
