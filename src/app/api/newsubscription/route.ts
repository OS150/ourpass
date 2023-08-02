import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'


export async function POST(request: NextRequest) {
    const {email, name, text, upload, add_info, invite} = await request.json();
    try {
        //query for the id from the email
        const queryEmail = 'SELECT user_id FROM users WHERE email= $1'
        const result_email = await db.query(queryEmail, [email]);
        const creator_id = result_email['rows'][0]['user_id'];
        //query for id from invite
        const query_invite_id = 'SELECT user_id FROM users WHERE email = $1';
        const result_invite_id = await db.query(query_invite_id, [invite]);
        const invited_id = result_invite_id['rows'][0]['user_id'];
        //add current time
        const date = new Date();
        //add to subscriptions
        const query_subscriptions = 'INSERT INTO subs (creator_id, name, text, upload, status, date, add_info) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING invite_id ';
        const results_subscriptions = await db.query(query_subscriptions, [creator_id, name, text, upload, 'available', date.toLocaleDateString(), add_info]);
        const results_id = results_subscriptions['rows'][0]['invite_id'];
        // //add to invite table
        const query_invite = 'INSERT INTO invite (user_id, invite_id) VALUES ($1, $2)'
        await db.query(query_invite, [invited_id, results_id ]);
        return new Response(JSON.stringify("added subscription"), { status: 200 })
    }
    catch (err) {
        console.log(err);
        return new Error;
    }
}