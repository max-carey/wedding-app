'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations('PasswordPage');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Replace this with your actual password
    const correctPassword = process.env.NEXT_PUBLIC_WEDDING_PASSWORD || 'mezcal';
    
    if (password === correctPassword) {
      // Set authentication cookie (expires in 1 year)
      Cookies.set('wedding-auth', 'true', { 
        expires: 365,
        path: '/',
        sameSite: 'strict'
      });
      
      // Force a hard refresh to ensure the cookie is set
      window.location.href = '/';
    } else {
      setError(t('errorMessage'));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAF7] p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#7D9B76]">
            {t('title')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('description')}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              {t('passwordLabel')}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#7D9B76] focus:border-[#7D9B76] focus:z-10 sm:text-sm"
              placeholder={t('passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7D9B76] hover:bg-[#3A7232] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7D9B76] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? t('loadingButton') : t('submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
