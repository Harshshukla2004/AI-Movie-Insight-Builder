import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { movie } = await req.json();

  return NextResponse.json({
    summary: `AI-generated insight for the movie "${movie}".`,
    genreInsight: 'The movie blends drama and suspense elements.',
    audience: 'Recommended for drama and thriller lovers.'
  });
}

