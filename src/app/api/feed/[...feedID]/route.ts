import type { NextRequest, NextResponse } from 'next/server'
import db from '../../models/dbmodel'

export async function GET(request: NextRequest, { params }: { params: { feedID: string } }) {
  try {
    const feedID = Number(params.feedID)
      const query = `SELECT * FROM subs WHERE creator_id = $1`
      const resultQuery = await db.query(query, [feedID]);
      const invite = `SELECT i.user_id, s.creator_id, s.invite_id, s.text, s.upload, s.status FROM invite i INNER JOIN subs s ON i.invite_id = s.invite_id WHERE i.user_id = $1`
      const resultInvite = await db.query(invite, [feedID])
      
      console.log('resultQUERYRYRY', resultQuery['rows']);
      console.log('resultINVITETETETE', resultInvite['rows']);
      const feed = [resultQuery['rows'][0], resultInvite['rows'][0]];
      return new Response(JSON.stringify(feed), { status: 201 });
  } catch(err) {
      console.log(err)
      return new Response("Failed to add to favorites", { status: 500 });
  }
}

