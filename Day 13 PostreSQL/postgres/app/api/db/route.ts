import { Pool } from "pg";
import { NextApiRequest, NextApiResponse } from "next";
import { time } from "console";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT NOW()");
        client.release();

        res.status(200).json({
            message: "Connnected to PostreSQL",
            time: result.rows[0].now,
        })
    } catch (error) {
        console.error("Database Connection Error: ", error);
        res.status(500).json({ error: "Database connection failed" })
    }
}