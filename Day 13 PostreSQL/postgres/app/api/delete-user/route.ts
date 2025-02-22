import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function DELETE(
    req: NextRequest
) {
    if (req.method !== "DELETE") {
        return NextResponse.json({ error: "Only Delete request allowed" }, { status: 405 });
    };
    const { id } = await req.json();

    try {
        const client = await pool.connect();
        const result = await client.query(
            "DELETE FROM users WHERE id = $1 RETURNING *", [id]
        );
        client.release();

        if (result.rowCount === 0) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }

        NextResponse.json({ message: "user deleted successfully", user: result.rows[0] }, { status: 201 })
    } catch (error) {
        console.error("Delete Error: ", error);
        NextResponse.json({ error: "Delete Error" }, { status: 500 })
    }
}