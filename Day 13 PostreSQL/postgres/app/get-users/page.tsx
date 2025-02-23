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
        <div className='w-full p-6 flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-bold text-center'>Users</h1>
            {users.map((user) => (
                <div key={user.id} className=' border border-white/50 flex justify-between items-center text-sm font-bold text-slate-200'>
                    <h1 className='p-4 border w-56 border-white/45'>{user.name}</h1>
                    <h1 className='p-4 border w-80 border-white/45'>{user.email}</h1>
                </div>
            ))}
        </div>
    )
}

export default GET_USERS
