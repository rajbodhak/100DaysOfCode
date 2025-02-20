"use client"
import { useState, useEffect } from 'react'
import LeaderBoardCard from '@/components/LeaderBoardCard'

type LeaderBoardEntry = {
    _id: string;
    username: string;
    score: number;
}

const page = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderBoardEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            try {
                const response = await fetch("/api/leaderboard");
                if (!response.ok) {
                    throw new Error("Data not fetched in LeaderBoard")
                }
                const data = await response.json();
                setLeaderboard(data)
            } catch (error) {
                console.log("Data fetching Error in LeaderBoard Page", error);
            } finally {
                setLoading(false);
            }
        }

        fetchLeaderboardData();
    }, [])
    return (
        <div className="flex flex-col items-center min-h-screen px-4 font-spaceGrotesk ">
            <h1 className="text-2xl font-bold mt-16 text-white mb-4">Leaderboard</h1>
            {loading ? (
                <h1 className='text-xl text-center font-bold text-white'>Loading...</h1>
            ) : (
                leaderboard.map((entry) => (
                    <LeaderBoardCard key={entry._id} username={entry.username} score={entry.score} />
                ))
            )}
        </div>
    )
}

export default page
