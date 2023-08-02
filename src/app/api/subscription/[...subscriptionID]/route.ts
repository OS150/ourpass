import type { NextRequest } from "next/server";
import db from '../../models/dbmodel'


export async function GET(request: NextRequest, { params }: { params: { subscriptionID: string } }) {
    //fetch from database where the invite_ID is params.subscriptionID
    const invite_ID = Number(params.subscriptionID);
    console.log(invite_ID);
    try {
        const query = 'SELECT * FROM subs WHERE invite_id = $1'
        const result = await db.query(query, [invite_ID]);
        const sub = result['rows'][0];
        return new Response(JSON.stringify(sub), { status: 200 });
    }
    catch (err) {
        console.log(err);
        return new Error;
    }
}