import sql from '@/app/api/utils/sql';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const stage = searchParams.get('stage');

    let query = 'SELECT * FROM form_submissions';
    
    if (stage && stage !== 'all') {
      query += ` WHERE stage = '${stage}'`;
    }
    
    query += ' ORDER BY created_at DESC';

    const submissions = await sql`
      SELECT * FROM form_submissions 
      ${stage && stage !== 'all' ? sql`WHERE stage = ${stage}` : sql``}
      ORDER BY created_at DESC
    `;
    
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, stage } = await request.json();
    
    const result = await sql`
      UPDATE form_submissions 
      SET stage = ${stage}
      WHERE id = ${id}
      RETURNING *
    `;
    
    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}
