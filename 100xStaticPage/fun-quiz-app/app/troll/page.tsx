import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20 px-10 min-h-screen gap-4 bg-gradient-to-br from-black/50 via-white/5 to-black/50'>
            <h1 className='text-xl font-bold'>Enter Your <span className='bg-gradient-to-br from-orange-600 via-white to-green-600 bg-clip-text text-transparent'>Aadhar</span> Card No.</h1>
            <input
                disabled
                type="text"
                placeholder='51XX XX74 XX69' className='input-style text-center'
            />
            <Link href={"/quiz/"}>
                <button className='btn-primary'>Just <span className='text-yellow-400 font-bold'> Kidding </span> You Can Go</button>
            </Link>

        </div>
    )
}

export default page
