import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(
    req: NextRequest,
) {
    if (req.method !== "PUT") {
        return NextResponse.json({ error: "Only PUT method Allowed" }, { status: 405 });
    }

    const { id, name, email } = await req.json();

    try {
        const client = await pool.connect();
        const result = await client.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]
        )
        client.release();

        if (result.rowCount === 0) {
            return NextResponse.json({ error: "User not found" }, { status: 400 })
        };

        NextResponse.json({ message: "User updated", user: result.rows[0] }, { status: 201 })
    } catch (error) {
        console.error("Database Error while Update", error);
        NextResponse.json({ error: "Database Error while update" }, { status: 500 });
    }
}