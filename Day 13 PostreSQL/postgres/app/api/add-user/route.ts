import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { name, email } = await req.json();
        const client = await pool.connect();
        const result = await client.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [name, email]
        );
        client.release();
        return NextResponse.json({ message: "User added", user: result.rows[0] }, { status: 201 });
    } catch (error) {
        console.error("Database Error", error);
        return NextResponse.json({ error: "Database Error in add user function" }, { status: 500 });
    }
}
