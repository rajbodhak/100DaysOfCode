import React from 'react'
import { User } from '@/type'

export const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users/", { cache: "no-cache" });
    const data = await response.json();
    return data.users;
}
export default async function UsersPage() {
    const users = await getUsers();

    return (
        <div className='p-10'>
            <h1>Users</h1>
            <ul >
                {users.map((user: any) => (
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </div>
    );
}

