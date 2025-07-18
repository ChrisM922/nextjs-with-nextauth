'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Navbar } from '@/components/Navbar';
import { LoadingSpinner } from '@/components/Loading';

export default function APITest() {
  const { data: session, status } = useSession();
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const testProtectedAPI = async () => {
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await fetch('/api/protected', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'API call failed');
      } else {
        setResponse(data);
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const testProtectedPOST = async () => {
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await fetch('/api/protected', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Hello from client!',
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'API call failed');
      } else {
        setResponse(data);
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            API Testing
          </h1>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Protected API Routes
              </h2>
              <p className="text-gray-600 mb-4">
                Test the protected API endpoints that require authentication.
              </p>
              
              <div className="space-x-4">
                <button
                  onClick={testProtectedAPI}
                  disabled={loading || !session}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
                >
                  {loading ? 'Testing...' : 'Test GET /api/protected'}
                </button>
                
                <button
                  onClick={testProtectedPOST}
                  disabled={loading || !session}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
                >
                  {loading ? 'Testing...' : 'Test POST /api/protected'}
                </button>
              </div>
              
              {!session && (
                <p className="text-red-600 mt-4">
                  You must be signed in to test the API routes.
                </p>
              )}
            </div>
            
            {loading && (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{error}</p>
              </div>
            )}
            
            {response && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  API Response:
                </h3>
                <pre className="text-sm text-green-700 overflow-x-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
