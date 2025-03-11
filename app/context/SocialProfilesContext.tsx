"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of a social profile
export interface SocialProfile {
  id: string;
  provider: string;
  connected: boolean;
  username?: string;
  profilePicture?: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
}

// Define the context shape
interface SocialProfilesContextType {
  profiles: SocialProfile[];
  isLoading: boolean;
  error: string | null;
  connectProfile: (provider: string) => void;
  disconnectProfile: (provider: string) => void;
  isProfileConnected: (provider: string) => boolean;
}

// Create the context with default values
const SocialProfilesContext = createContext<SocialProfilesContextType>({
  profiles: [],
  isLoading: false,
  error: null,
  connectProfile: () => {},
  disconnectProfile: () => {},
  isProfileConnected: () => false,
});

// Hook to use the context
export const useSocialProfiles = () => useContext(SocialProfilesContext);

// Provider component
export const SocialProfilesProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<SocialProfile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load profiles from localStorage on mount
  useEffect(() => {
    try {
      const savedProfiles = localStorage.getItem('socialProfiles');
      if (savedProfiles) {
        setProfiles(JSON.parse(savedProfiles));
      }
    } catch (err) {
      console.error('Error loading profiles from localStorage:', err);
      setError('Failed to load saved profiles');
    } finally {
      setIsLoading(false);
    }
    
    // Listen for OAuth redirects with tokens
    const handleStorageChange = () => {
      loadConnectedProfiles();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Check for tokens in cookies
    loadConnectedProfiles();
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    if (profiles.length > 0) {
      localStorage.setItem('socialProfiles', JSON.stringify(profiles));
    }
  }, [profiles]);

  // Function to load connected profiles from cookies
  const loadConnectedProfiles = async () => {
    try {
      // In a real app, you'd make an API call to get the user's connected profiles
      // For this example, we'll check for tokens in cookies
      const response = await fetch('/api/auth/connected-profiles');
      if (response.ok) {
        const connectedProfiles = await response.json();
        setProfiles(prev => {
          // Merge with existing profiles
          const updatedProfiles = [...prev];
          
          connectedProfiles.forEach((profile: SocialProfile) => {
            const existingIndex = updatedProfiles.findIndex(p => p.provider === profile.provider);
            if (existingIndex >= 0) {
              updatedProfiles[existingIndex] = { ...updatedProfiles[existingIndex], ...profile };
            } else {
              updatedProfiles.push(profile);
            }
          });
          
          return updatedProfiles;
        });
      }
    } catch (err) {
      console.error('Error loading connected profiles:', err);
    }
  };

  // Function to initiate the connection process
  const connectProfile = (provider: string) => {
    // Redirect to the auth endpoint
    const callbackUrl = window.location.href;
    window.location.href = `/api/auth/${provider.toLowerCase()}?mode=authorize&callbackUrl=${encodeURIComponent(callbackUrl)}`;
  };

  // Function to disconnect a profile
  const disconnectProfile = async (provider: string) => {
    try {
      // Call API to revoke tokens
      const response = await fetch(`/api/auth/${provider.toLowerCase()}/disconnect`, {
        method: 'POST',
      });
      
      if (response.ok) {
        // Update local state
        setProfiles(prev => 
          prev.map(profile => 
            profile.provider.toLowerCase() === provider.toLowerCase() 
              ? { ...profile, connected: false, accessToken: undefined, refreshToken: undefined } 
              : profile
          )
        );
      } else {
        setError(`Failed to disconnect ${provider}`);
      }
    } catch (err) {
      console.error(`Error disconnecting ${provider}:`, err);
      setError(`Error disconnecting ${provider}`);
    }
  };

  // Function to check if a profile is connected
  const isProfileConnected = (provider: string): boolean => {
    return profiles.some(profile => 
      profile.provider.toLowerCase() === provider.toLowerCase() && profile.connected
    );
  };

  // Context value
  const value = {
    profiles,
    isLoading,
    error,
    connectProfile,
    disconnectProfile,
    isProfileConnected,
  };

  return (
    <SocialProfilesContext.Provider value={value}>
      {children}
    </SocialProfilesContext.Provider>
  );
}; 