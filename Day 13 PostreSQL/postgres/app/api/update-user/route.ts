import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function PUT(req: NextRequest) {
    try {
        const { id, name, email } = await req.json();

        if (!id || !name || !email) {
            return NextResponse.json({ error: "ID, Name, and Email are required" }, { status: 400 });
        }

        const client = await pool.connect();
        const result = await client.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]
        );
        client.release();

        if (result.rowCount === 0) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User updated", user: result.rows[0] }, { status: 200 });
    } catch (error) {
        console.error("Database Error while updating", error);
        return NextResponse.json({ error: "Database Error while updating" }, { status: 500 });
    }
}
