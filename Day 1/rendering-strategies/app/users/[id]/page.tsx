"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { User } from '@/type'
const page = () => {
    const params = useParams();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const id = params.id;
        async function fetchUser(id: any) {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await response.json();
            setUser(data)
        }
        fetchUser(id);
    }, [params.id])
    return (
        <div className='text-3xl font-bold p-10'>
            {user ? (
                <h1>Hello {user.firstName}, Hope you are doing well, Your eye looks in good in {user.eyeColor} color. Ahh You born in {user.birthDate}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default page
