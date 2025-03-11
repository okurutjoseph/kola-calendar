import { NextRequest, NextResponse } from 'next/server';

// This endpoint handles disconnecting a social profile
export async function POST(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const provider = params.provider;
  
  try {
    // In a real app, you would:
    // 1. Get the token from the cookie
    // 2. Call the provider's API to revoke the token
    // 3. Delete the cookie
    
    // For this example, we'll just delete the cookie
    const response = NextResponse.json({ success: true });
    
    // Delete the token cookie
    response.cookies.delete(`${provider}_token`);
    
    return response;
  } catch (error) {
    console.error(`Error disconnecting ${provider}:`, error);
    return NextResponse.json({ error: `Failed to disconnect ${provider}` }, { status: 500 });
  }
} 