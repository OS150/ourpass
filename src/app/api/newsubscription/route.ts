import type { NextRequest, NextResponse } from 'next/server'
import db from '../models/dbmodel'


export async function POST(request: NextRequest) {
    const {email, text, upload, time, capacity} = await request.json();
    try {

        //query for id from email
        const query_id = 'SELECT user_id FROM users where email = $1'
        const results_user_id = await db.query(query_id, [email]);
        const creator_id = results_user_id['rows'][0]['user_id'];
        //add new rules to rules table and get id back
        const query_rules = 'INSERT INTO rules (time, capacity) VALUES ($1, $2) RETURNING rules_id';
        const result_rules = await db.query(query_rules, [time, capacity]);
        const rules_id = result_rules['rows'][0]['rules_id'];
        //add to subscriptions
        const query_subscriptions = 'INSERT INTO subs (creator_id, text, upload, rules_id, status) VALUES ($1, $2, $3, $4, $5)';
        await db.query(query_subscriptions, [creator_id, text, upload, rules_id, 'available']);
        return new Response(JSON.stringify("added subscription"), { status: 200 })
    }
    catch (err) {
        console.log(err);
        return new Error;
    }
}