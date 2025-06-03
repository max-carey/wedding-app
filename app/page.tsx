import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

async function getCountry() {
  try {
    // Add cache control to prevent caching during development
    const response = await fetch('https://ipapi.co/json/', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Geolocation data:', data); // Debug log
    return data.country_code;
  } catch (error) {
    console.error('Error fetching country:', error);
    return null;
  }
}

export default async function RootPage() {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  const country = await getCountry();
  
  console.log('Detected country:', country); // Debug log
  console.log('Browser language:', acceptLanguage); // Debug log
  
  // Check browser language first
  if (acceptLanguage.includes('es')) {
    redirect('/es');
  }
  
  // Then check country
  if (country === 'MX') {
    redirect('/es');
  } else if (country === 'US') {
    redirect('/en');
  } else {
    // Default to English for other countries
    redirect('/en');
  }
}