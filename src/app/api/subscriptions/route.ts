import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'


export async function POST(request: NextRequest) {
    const { email } = await request.json();
    try {
        const results = [];
        //fetch subscriptions that are your friends
        const friends_queries = 'SELECT invite.invite_id FROM users LEFT JOIN invite ON users.user_id = invite.user_id'
        //fetch own subscriptions

    }
}

