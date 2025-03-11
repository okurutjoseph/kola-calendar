import { NextRequest, NextResponse } from 'next/server';

// This endpoint returns all connected social profiles based on cookies
export async function GET(request: NextRequest) {
  try {
    const connectedProfiles = [];
    const cookies = request.cookies;
    
    // Get all cookies that end with _token
    const allCookies = cookies.getAll();
    for (let i = 0; i < allCookies.length; i++) {
      const cookie = allCookies[i];
      const name = cookie.name;
      
      if (name.endsWith('_token')) {
        const provider = name.replace('_token', '');
        
        try {
          // Parse the token data
          const tokenData = JSON.parse(cookie.value);
          
          // Create a profile object
          connectedProfiles.push({
            id: `${provider}-${Date.now()}`, // Generate a temporary ID
            provider,
            connected: true,
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
            expiresAt: tokenData.expires_in ? Date.now() + (tokenData.expires_in * 1000) : undefined,
            // We would typically fetch these from the provider's API
            username: undefined,
            profilePicture: undefined,
          });
        } catch (error) {
          console.error(`Error parsing token for ${provider}:`, error);
        }
      }
    }
    
    return NextResponse.json(connectedProfiles);
  } catch (error) {
    console.error('Error getting connected profiles:', error);
    return NextResponse.json({ error: 'Failed to get connected profiles' }, { status: 500 });
  }
} 