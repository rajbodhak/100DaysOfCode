import { connectToDataBase } from "@/lib/mongodb"
import Leaderboard from "@/models/Leaderboard"
import { NextRequest, NextResponse } from "next/server";

//POST - Add a new score
export async function POST(req: NextRequest) {
    try {
        await connectToDataBase();
        const { username, score } = await req.json();

        if (!username || score == null) {
            return NextResponse.json({ error: "username and score are required" }, { status: 400 });
        }

        const newEntry = new Leaderboard({ username, score });
        await newEntry.save();

        return NextResponse.json({ message: "Score saved successfully", newEntry }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 })
    }
}

//GET - Get all users
export async function GET() {
    try {
        await connectToDataBase();
        const leaderboard = await Leaderboard.find().sort({ score: -1 });
        return NextResponse.json(leaderboard, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}