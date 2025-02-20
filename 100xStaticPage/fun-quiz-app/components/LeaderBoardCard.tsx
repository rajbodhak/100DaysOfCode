import React from 'react'

type LeaderBoardCardProps = {
    username: string;
    score: number;
}

const LeaderBoardCard = ({ username, score }: LeaderBoardCardProps) => {
    return (
        <div className='w-[90%] leaderboard-card'>
            <p className='font-bold text-white shadow-lg text-lg'>{username}</p>
            <p className='font-bold text-white shadow-lg text-lg'>{score}</p>
        </div>
    )
}

export default LeaderBoardCard
