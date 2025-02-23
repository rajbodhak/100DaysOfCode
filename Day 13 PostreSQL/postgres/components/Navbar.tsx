import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full py-4 px-3 bg-black/40 backdrop-blur-md flex justify-evenly items-center text-xl'>
            <Link href={"/"}>Home</Link>
            <Link href={"/get-users"}>Get User</Link>
            <Link href={"/create-users"}>Create User</Link>
            <Link href={"/update-users"}>Update User</Link>
            <Link href={"/delete-users"}>Delete User</Link>
        </div>
    )
}

export default Navbar
