import mongoose, { Schema, Model, Document } from "mongoose";

export interface ILeaderboard extends Document {
    username: string;
    score: number;
}

const LeaderboardSchema: Schema<ILeaderboard> = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
},
    { timestamps: true }
)

const Leaderboard: Model<ILeaderboard> = mongoose.models.Leaderboard || mongoose.model<ILeaderboard>("Leaderboard", LeaderboardSchema);

export default Leaderboard;