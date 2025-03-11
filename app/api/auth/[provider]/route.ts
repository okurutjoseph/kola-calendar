import { NextRequest, NextResponse } from 'next/server';

// This is a dynamic API route that handles authentication for different social media providers
export async function GET(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const provider = params.provider;
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('mode') || 'authorize';
  
  // Get the callback URL for after authentication
  const callbackUrl = searchParams.get('callbackUrl') || process.env.NEXT_PUBLIC_APP_URL || '';
  
  try {
    if (mode === 'authorize') {
      // Generate the authorization URL based on the provider
      const authUrl = getAuthorizationUrl(provider);
      return NextResponse.redirect(authUrl);
    } else if (mode === 'callback') {
      // Handle the callback from the provider
      // Extract authorization code or token from the request
      const code = searchParams.get('code');
      const error = searchParams.get('error');
      
      if (error) {
        // Redirect back to the app with error
        return NextResponse.redirect(`${callbackUrl}?error=${error}`);
      }
      
      if (!code) {
        return NextResponse.redirect(`${callbackUrl}?error=no_code`);
      }
      
      // Exchange the code for an access token
      const tokenData = await exchangeCodeForToken(provider, code);
      
      // Store the token in a secure cookie or session
      const response = NextResponse.redirect(callbackUrl);
      
      // Set a secure cookie with the token data
      // In a real app, you'd want to encrypt this and set proper security options
      response.cookies.set(`${provider}_token`, JSON.stringify(tokenData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      
      return response;
    }
    
    return NextResponse.json({ error: 'Invalid mode' }, { status: 400 });
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}

// Helper function to generate authorization URLs for different providers
function getAuthorizationUrl(provider: string): string {
  const baseCallbackUrl = `${process.env.NEXT_PUBLIC_APP_URL || ''}/api/auth/${provider}?mode=callback`;
  
  switch (provider.toLowerCase()) {
    case 'facebook':
      return `https://www.facebook.com/v18.0/dialog/oauth?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&scope=public_profile,email`;
      
    case 'instagram':
      return `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&scope=user_profile,user_media&response_type=code`;
      
    case 'linkedin':
      return `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&scope=r_liteprofile%20r_emailaddress`;
      
    case 'twitter':
    case 'x':
    case 'x (twitter)':
      return `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${process.env.TWITTER_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&scope=tweet.read%20users.read&state=state&code_challenge=challenge&code_challenge_method=plain`;
      
    case 'google':
      return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;
      
    case 'pinterest':
      return `https://www.pinterest.com/oauth/?client_id=${process.env.PINTEREST_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&response_type=code&scope=boards:read,pins:read`;
      
    case 'reddit':
      return `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REDDIT_CLIENT_ID}&response_type=code&state=random_state&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&duration=permanent&scope=identity`;
      
    case 'tiktok':
      return `https://www.tiktok.com/v2/auth/authorize?client_key=${process.env.TIKTOK_CLIENT_KEY}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&scope=user.info.basic&response_type=code&state=state`;
      
    case 'snapchat':
      return `https://accounts.snapchat.com/accounts/oauth2/auth?client_id=${process.env.SNAPCHAT_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&response_type=code&scope=snapchat-profile-api`;
      
    case 'yelp':
      return `https://www.yelp.com/oauth2/authorize?response_type=code&client_id=${process.env.YELP_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}`;
      
    case 'tripadvisor':
      // TripAdvisor uses a different OAuth flow, typically API key based
      // This is a simplified example - in reality, you'd need to follow their specific requirements
      return `https://api.tripadvisor.com/oauth2/authorize?response_type=code&client_id=${process.env.TRIPADVISOR_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}`;
      
    case 'googleanalytics':
    case 'google analytics':
      return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_ANALYTICS_CLIENT_ID}&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&response_type=code&scope=https://www.googleapis.com/auth/analytics.readonly`;
      
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}

// Helper function to exchange authorization code for access token
async function exchangeCodeForToken(provider: string, code: string): Promise<Record<string, unknown>> {
  const baseCallbackUrl = `${process.env.NEXT_PUBLIC_APP_URL || ''}/api/auth/${provider}?mode=callback`;
  
  let tokenUrl = '';
  let body: Record<string, string> = {};
  let headers: Record<string, string> = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  
  switch (provider.toLowerCase()) {
    case 'facebook':
      tokenUrl = 'https://graph.facebook.com/v18.0/oauth/access_token';
      body = {
        client_id: process.env.FACEBOOK_CLIENT_ID || '',
        client_secret: process.env.FACEBOOK_CLIENT_SECRET || '',
        redirect_uri: baseCallbackUrl,
        code,
      };
      break;
      
    case 'instagram':
      tokenUrl = 'https://api.instagram.com/oauth/access_token';
      body = {
        client_id: process.env.INSTAGRAM_CLIENT_ID || '',
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET || '',
        grant_type: 'authorization_code',
        redirect_uri: baseCallbackUrl,
        code,
      };
      break;
      
    // Add similar cases for other providers
    case 'linkedin':
      tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
      body = {
        grant_type: 'authorization_code',
        code,
        redirect_uri: baseCallbackUrl,
        client_id: process.env.LINKEDIN_CLIENT_ID || '',
        client_secret: process.env.LINKEDIN_CLIENT_SECRET || '',
      };
      break;
      
    case 'twitter':
    case 'x':
    case 'x (twitter)':
      tokenUrl = 'https://api.twitter.com/2/oauth2/token';
      body = {
        code,
        grant_type: 'authorization_code',
        client_id: process.env.TWITTER_CLIENT_ID || '',
        redirect_uri: baseCallbackUrl,
        code_verifier: 'challenge', // In a real app, this should be properly generated and stored
      };
      break;
      
    // Add cases for all other supported providers
    case 'google':
      tokenUrl = 'https://oauth2.googleapis.com/token';
      body = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
        redirect_uri: baseCallbackUrl,
        grant_type: 'authorization_code',
      };
      break;
      
    case 'reddit':
      tokenUrl = 'https://www.reddit.com/api/v1/access_token';
      body = {
        grant_type: 'authorization_code',
        code,
        redirect_uri: baseCallbackUrl,
      };
      headers = {
        ...headers,
        'Authorization': `Basic ${Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64')}`,
      };
      break;
      
    case 'yelp':
      tokenUrl = 'https://api.yelp.com/oauth2/token';
      body = {
        grant_type: 'authorization_code',
        code,
        client_id: process.env.YELP_CLIENT_ID || '',
        client_secret: process.env.YELP_CLIENT_SECRET || '',
      };
      break;
      
    case 'tripadvisor':
      // Simplified example - adjust according to TripAdvisor's actual API
      tokenUrl = 'https://api.tripadvisor.com/oauth2/token';
      body = {
        grant_type: 'authorization_code',
        code,
        client_id: process.env.TRIPADVISOR_CLIENT_ID || '',
        client_secret: process.env.TRIPADVISOR_CLIENT_SECRET || '',
        redirect_uri: baseCallbackUrl,
      };
      break;
      
    case 'googleanalytics':
    case 'google analytics':
      tokenUrl = 'https://oauth2.googleapis.com/token';
      body = {
        code,
        client_id: process.env.GOOGLE_ANALYTICS_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_ANALYTICS_CLIENT_SECRET || '',
        redirect_uri: baseCallbackUrl,
        grant_type: 'authorization_code',
      };
      break;
      
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
  
  // Make the token request
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers,
    body: new URLSearchParams(body),
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error(`Token exchange failed for ${provider}:`, errorData);
    throw new Error(`Failed to exchange code for token: ${response.status} ${response.statusText}`);
  }
  
  return await response.json();
} 