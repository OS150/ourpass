import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'

export async function POST (request: NextRequest) {
    const res = await request.json();
    console.log(res);
    const values = [res.email, res.password];
    try {
        const createProfile = 'INSERT INTO users (email, password) VALUES ($1, $2)';
        const result = await db.query(createProfile, values);
        return new Response(JSON.stringify(res.email), { status: 200 })
    }
    catch (err) {
        return new Error;
    }

}