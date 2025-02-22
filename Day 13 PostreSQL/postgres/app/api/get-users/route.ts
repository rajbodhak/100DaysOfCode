import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(
    req: NextRequest,
) {
    try {
        const client = await pool.connect();
        const result = await client.query(
            "SELECT * FROM users ORDER BY created_at DESC"
        );
        client.release();
        return NextResponse.json({ users: result.rows }, { status: 200 });
    } catch (error) {
        console.error("GET request Error", error);
        return NextResponse.json({ error: "GET server Error" }, { status: 500 })
    }
}