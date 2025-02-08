"use client"
import { useState, useEffect } from 'react'
import { User } from '@/type';
import Link from 'next/link';

const page = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("https://dummyjson.com/users/");
            const data = await response.json();
            setUsers(data.users);
        }
        fetchUsers();
    }, [])
    return (
        <div className='flex items-center p-10 text-xl font-bold'>
            <ul className='flex flex-col'>
                {users.length > 0 ? (users.map((user) => (
                    <Link href={`/users/${user.id}/`} key={user.id}>{user.firstName}</Link>
                ))) : (
                    <h1 className='font-bold text-2xl'>Loading...</h1>
                )}
            </ul>
        </div>
    )
}

export default page
