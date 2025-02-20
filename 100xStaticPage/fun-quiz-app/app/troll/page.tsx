import React from 'react'
import Link from 'next/link'

const Page = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <h1 className='text-xl font-bold'>Enter Your <span className='bg-gradient-to-br from-orange-600 via-white to-green-600 bg-clip-text text-transparent'>Aadhar</span> Card No.</h1>
            <input
                disabled
                type="text"
                placeholder='51XX XX74 XX69' className='input-style text-center'
            />
            <Link href={"/quiz/"}>
                <button className='btn-primary mb-10'>Just <span className='text-yellow-400 font-bold'> Kidding </span> You Can Go</button>
            </Link>

            <div>
                <h1> </h1>
            </div>
        </div>
    )
}

export default Page
