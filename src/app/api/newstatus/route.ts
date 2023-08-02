import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    const { invite_id, status } = await request.json();
    let newStatus;
    try {
        if (status == 'available') { newStatus = 'in use' }
        else { newStatus = 'available' };
        console.log(newStatus);
        const query = 'UPDATE subs SET status = $1 WHERE invite_id = $2'
        const results = await db.query(query, [newStatus, invite_id]);
        return new Response(JSON.stringify("changed status"), { status: 200 })
    }
    catch (err) {
        console.log(err);
        return new Error;
    }
}
