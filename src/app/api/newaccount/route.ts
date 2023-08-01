import type { NextRequest, NextResponse } from 'next/server'
import db from '../../../'

export async function POST (request: NextRequest) {
    const res = await request.json()
    console.log(res);
    return new Response(JSON.stringify( res ), { status: 200 })

}