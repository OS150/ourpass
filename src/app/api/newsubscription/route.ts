import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'


export async function POST(request: NextRequest) {
    const {email, text, upload, time, capacity, invite} = await request.json();
    try {
        //query for id from email
        const query_id = 'SELECT user_id FROM users where email = $1'
        const results_user_id = await db.query(query_id, [email]);
        const creator_id = results_user_id['rows'][0]['user_id'];
        //query for id from invite
        const query_invite_id = 'SELECT user_id FROM users where email = $1';
        const result_invite_id = await db.query(query_invite_id, [invite]);
        const invited_id = result_invite_id['rows'][0]['user_id'];

        //add new rules to rules table and get id back
        const query_rules = 'INSERT INTO rules (time, capacity) VALUES ($1, $2) RETURNING rules_id';
        const result_rules = await db.query(query_rules, [time, capacity]);
        const rules_id = result_rules['rows'][0]['rules_id'];

        //add current time
        const date = new Date();
        //add to subscriptions
        const query_subscriptions = 'INSERT INTO subs (creator_id, text, upload, rules_id, status, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING invite_id ';
        const results_subscriptions = await db.query(query_subscriptions, [creator_id, text, upload, rules_id, 'available', date.toLocaleDateString()]);
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