// app/api/clipboard/route.js

import { NextResponse } from "next/server";

let clipboardData = {};
let idCounter = 1;

export async function POST(request: {
    json: () => PromiseLike<{ text: any }> | { text: any };
}) {
    const { text } = await request.json();
    const id = idCounter++;
    clipboardData[id] = text;
    return NextResponse.json({ id });
}

export async function GET(request: {
    url: string | URL;
    headers: { host: any };
}) {
    const { searchParams } = new URL(
        request.url,
        `http://${request.headers.host}`,
    );
    const id = searchParams.get("id");
    const text = clipboardData[id];
    return NextResponse.json({ text: text || "" });
}
