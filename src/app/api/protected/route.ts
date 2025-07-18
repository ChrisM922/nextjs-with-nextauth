import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: 'You must be logged in.' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: 'This is a protected API route',
    user: session.user,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: 'You must be logged in.' },
      { status: 401 }
    );
  }

  const body = await request.json();
  
  return NextResponse.json({
    message: 'Data received successfully',
    user: session.user,
    data: body,
    timestamp: new Date().toISOString(),
  });
}
