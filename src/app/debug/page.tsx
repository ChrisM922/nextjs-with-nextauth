'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function DebugPage() {
  const { data: session, status } = useSession();
  const [clientEnv, setClientEnv] = useState<any>({});

  useEffect(() => {
    // Check client-side environment
    setClientEnv({
      NODE_ENV: process.env.NODE_ENV,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      origin: window.location.origin,
      href: window.location.href,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">NextAuth Debug Information</h1>
        
        {/* Session Status */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Session Status</h2>
          <div className="space-y-2">
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Has Session:</strong> {session ? 'Yes' : 'No'}</p>
          </div>
        </div>

        {/* Session Data */}
        {session && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Session Data</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        )}

        {/* Client Environment */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Client Environment</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(clientEnv, null, 2)}
          </pre>
        </div>

        {/* Current URL Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current URL Information</h2>
          <div className="space-y-2">
            <p><strong>Origin:</strong> {typeof window !== 'undefined' ? window.location.origin : 'N/A'}</p>
            <p><strong>Pathname:</strong> {typeof window !== 'undefined' ? window.location.pathname : 'N/A'}</p>
            <p><strong>Full URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'N/A'}</p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Troubleshooting Steps:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-700">
            <li>Check that NEXTAUTH_URL matches your domain exactly</li>
            <li>Verify OAuth callback URLs include your domain</li>
            <li>Ensure DATABASE_URL is accessible from Vercel</li>
            <li>Check Vercel function logs for errors</li>
            <li>Verify all OAuth credentials are set in Vercel environment variables</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
