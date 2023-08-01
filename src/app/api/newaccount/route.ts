import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    try {
    const res = await request.json();
    const saltRounds = 10;
    const password = await bcrypt.hash(res.password, saltRounds);
    const values = [res.email, password];
    const createProfile = 'INSERT INTO users (email, password) VALUES ($1, $2) ';
    const result = await db.query(createProfile, values);
    return new Response(JSON.stringify(res.email), { status: 200 })
    }
    catch (err) {
        console.log(err);
        return new Error;
    }

}