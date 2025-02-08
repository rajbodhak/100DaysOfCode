import data from "@/data.json";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
    // console.log("Context:", context); // Debugging
    // console.log("Params:", context.params);
    const user = data.filter((x) => Number(context.params.id) === x.id);
    return NextResponse.json({ user });
}
